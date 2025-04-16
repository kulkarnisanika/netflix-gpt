
# CineGPT – AI-Powered Movie Recommendation App



CineGPT is a modern, responsive movie streaming app inspired by Netflix clone — enhanced with AI capabilities using OpenAI's GPT APIs. This full-stack project combines a reach responsive UI (Desktop, Tablet and Mobile) with smart features like multilingual support(English, Spanish, French, Hindi and Marathi), personalized recommendation based browsing, and robust authentication.
## Features
    1. GPT-Powered Movie Recommendations
    2. Multilingual Support (Hindi, Marathi, Spanish, French, English)  
    3. Firebase Authentication (SignIn/SignUp functionality)
    4. Form Validation with Realtime Feedback
    5. Live Movie Data with TMDB APIs
    6. Global State Management with Redux
    7. Custom Hooks for clean and cleaner industry based implementation
    8. Modern Responsive UI using Tailwind CSS (Desktop, Tablet, Mobile)
    9. Modular & Scalable Codebase
    10. Environment Configuration via .env and appConfig created in store 


## Component Structure
     - Login
          - SignIn/SignUp Form
          - Authentication
          - Form validation
          - Redirect to Browse
     - Browse
          - Header    
          - Main Container
               - Video Title
               - Video Background
          - Secondary container
               - Movie List
                    - Cards * movie types
               - GPTSerach container       
                    - GPT Serach Bar
                    - GPT movie suggestion
                        - Movie List
                            - Cards

          


## Redux Store Architecture
    - appConfig
        - lang: 'en'
    - user
        - uid: null
        - email: null
        - displayName: null
    - movie 
        - nowPlayingMovies: null
        - topRatedMovies: null
        - popularMovies: null
        - UpcomingMivies: null
        - trailerVideo: null
    - gpt
        - enableGptSearch: false
        - recommendedMovieNames: null
        - recommendedMovieDetails: null
## Project Setup

Before running the project, please add .env file at root level.
Ensure you have added below keys in .env file:

    1. TMDB API key
    2. openai key

After adding above keys:

    1. clone "https://github.com/kulkarnisanika/netflix-gpt.git"
    2. run - npm install
    3. run - npm start
## Hosting URL

https://netflix-gpt-314ec.web.app