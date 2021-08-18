
# Eudaimonia Exam

Technical exam for Eudaimonia's selection process as requested.




## Documentation

- Write an algorithm that, given a natural number, detects whether it is prime or not. Note: A prime number is an integer greater than 1 that has only two different divisors: itself and 1.

  
## Installation

Install my-project with npm

```bash
  npm install eudaimonia-exam
  cd eudaimonia-exam
```
    
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

  
## Lessons Learned

"prompt" is not supported on Node.js Environment as it is part of the window object, which made this challenge difficult. I'm currently thinking on a better and simpler code for this challenge. My idea was to implement a maddleware so the user couldn't move forward if the number they put wasn't a natural one. I'll be working on a better solution for this as I think it can be refactored.

  