from flask import Flask, request, jsonify
from rake_nltk import Rake
import nltk
from flask_cors import CORS

# Downloading NLTK data
nltk.download('stopwords')
nltk.download('punkt')

# Initializing the Flask app
app = Flask(__name__)
CORS(app, origins='*')

@app.route('/extract_keywords', methods=['POST'])
def extract_keywords():
    data = request.json
    input_text = data.get("input_text", "")

    # Initializing the Rake instance
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

if __name__ == '__main__':
    app.run(debug=True)
