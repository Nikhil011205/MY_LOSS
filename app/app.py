from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
from flask_cors import CORS

model = tf.keras.models.load_model('linux_distribution_neural.h5')

app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "*"}})


@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    user_input = np.array(data['input'])  
    prediction = model.predict(user_input.reshape(1, -1))
    top_3 = np.argsort(prediction[0])[-3:][::-1] 
    return jsonify({'top_3': top_3.tolist()})

if __name__ == '__main__':
    app.run(debug=False,host="0.0.0.0")
