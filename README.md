# Yum-Teen-Web-Project
A project for Web Programming class, Software Engineering, KMITL 

## How to run frontend
1. Go to /front
    ```
    cd front
    ```
2. Install neccessary libraries
    ```
    npm install
    ```
3. Start development server
    ```
    npm run dev
    ```
 
## How to run backend
1. Go to /back
    ```
    cd back
    ```
2. Activate virtual environment
    ```
    .venv\Scripts\activate
    ```
3. Run backend
    ```
    uvicorn back.controller.Controller:app --reload
    ```