# Flask Form Application

This is a simple Flask application that demonstrates a form submission. The form collects the user's name, email, and phone number, and displays the submitted information back to the user.

## Project Structure
newproj/
│
├── venv/                # Virtual environment directory
│
├── templates/           # HTML template files
│   └── index.html
│
├── static/              # Static files (CSS, JavaScript)
│   ├── script.js
│   └── styles.css
│
├── app.py 

## Dependencies

- Flask

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/newproj.git
    cd newproj
    ```

2. Create a virtual environment:
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install the required packages:
    ```sh
    pip install Flask
    ```

## Running the Application

1. Start the Flask app:
    ```sh
    python app.py
    ```

2. Open your web browser and navigate to `http://127.0.0.1:5000/`

## Features 
* Collects user's name, email, and phone number.

* Validates input fields.

* Displays submitted information back to the user.

## License

This project is licensed under the MIT License.

## Contribution

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

