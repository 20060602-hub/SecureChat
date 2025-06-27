import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase
cred = credentials.Certificate("app/firebase_credentials.json")  # update path if needed
firebase_admin.initialize_app(cred)

# Connect to Firestore
db = firestore.client()

# Fetch messages (from collection named "messages")
messages_ref = db.collection('messages')
docs = messages_ref.stream()

print("📨 All Chat Messages:")
for doc in docs:
    data = doc.to_dict()
    print(f"- ID: {doc.id}")
    for key, value in data.items():
        print(f"    {key}: {value}")
    print()
