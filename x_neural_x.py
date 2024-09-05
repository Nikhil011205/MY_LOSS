import numpy as np
from keras import models, layers, utils
import pandas as pd
from keras import callbacks
from sklearn.model_selection import train_test_split

# from tensorflow.keras.models import Sequential
# from tensorflow.keras.layers import Dense
# from tensorflow.keras.utils import to_categorical
# from tensorflow.keras.callbacks import EarlyStopping



early_stopping = callbacks.EarlyStopping(monitor='val_loss', patience=5, restore_best_weights=True)



num_samples = 100000
df = pd.read_csv('synthetic_linux_data.csv')
X = df.iloc[:,:-1].values
y = df.iloc[:,-1].values
# print(y)
y_categorical = utils.to_categorical(y, num_classes=20)
# print(y_categorical)
# quit()

X_train, X_val, y_train, y_val = train_test_split(X, y_categorical, test_size=0.2, random_state=42)


model = models.Sequential([
    layers.InputLayer(shape=(20,)),
    layers.Dense(64, activation='relu'),
    layers.Dense(64, activation='relu'),
    layers.Dense(20, activation='softmax')
])
# model.add(layers.InputLayer(shape=(20,)))

model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

history = model.fit(
    X_train, y_train,
    epochs=50,   
    batch_size=64, 
    validation_data=(X_val, y_val),
    callbacks=[early_stopping]
)

loss, accuracy = model.evaluate(X_val, y_val)
print(f'Validation Loss: {loss:.4f}')
print(f'Validation Accuracy: {accuracy:.4f}')


model.save('linux_distribution_neural.h5')
