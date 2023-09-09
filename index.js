<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacts</title>
    <style>
        /* CSS styling for the contacts page */
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
        }

        #contactsContainer {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            overflow: hidden;
        }

        #contactsHeader {
            background-color: #007bff;
            color: #fff;
            padding: 10px;
            text-align: center;
        }

        #contactsList {
            padding: 20px;
        }

        .contact {
            display: flex;
            align-items: center;
            padding: 10px;
            border-bottom: 1px solid #ccc;
            cursor: pointer;
        }

        .contact img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 10px;
        }

        .contactName {
            font-weight: bold;
        }

        #createNewContactButton {
            width: 100%;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 0;
            padding: 10px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div id="contactsContainer">
        <div id="contactsHeader">
            <h1>Contacts</h1>
        </div>
        <div id="contactsList">
            <div class="contact" onclick="window.location.href='person1.html'">
                <img src="person1.jpg" alt="Person 1">
                <div class="contactName">Person 1</div>
            </div>
            <div class="contact" onclick="window.location.href='person2.html'">
                <img src="person2.jpg" alt="Person 2">
                <div class="contactName">Person 2</div>
            </div>
            <!-- Add more contacts here -->
        </div>
        <button id="createNewContactButton" onclick="window.location.href='create_contact.html'">Create New Contact</button>
    </div>
</body>
</html>
