from flask import Flask, request, jsonify
from rake_nltk import Rake
import nltk
from flask_cors import CORS

# Download necessary NLTK data with error handling
try:
    nltk.download('stopwords')
    nltk.download('punkt')
    nltk.download('punkt_tab')
except Exception as e:
    print(f"Error downloading NLTK data: {e}")

# Initializing the Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all origins

@app.after_request
def after_request(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    return response

@app.route('/extract_keywords', methods=['POST'])
def extract_keywords():
    try:
        data = request.json
        if not data or "input_text" not in data:
            return jsonify({"error": "Invalid request. 'input_text' is required."}), 400
        
        input_text = data.get("input_text", "").strip()
        if not input_text:
            return jsonify({"error": "Input text cannot be empty."}), 400

        # Initialize the Rake instance
        rake = Rake()
        rake.extract_keywords_from_text(input_text)
        keywords = rake.get_ranked_phrases()
        actualKeywords = [word.title() for word in keywords]

        # Tokenizing the keywords into individual tokens
        keyword_tokens = [nltk.word_tokenize(keyword) for keyword in actualKeywords]
        flat_keyword_tokens = [token for sublist in keyword_tokens for token in sublist]

        return jsonify({
            "keyword_tokens": flat_keyword_tokens
        })
    
    except Exception as e:
        return jsonify({"error": f"Internal Server Error: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
