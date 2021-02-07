1. How long did you spend on the coding test?  
=> 6 hours

2. What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
=> Show increase/decrease in covid-data numbers over previous day.

3. What was the most useful feature that was added to the latest version of your chosen language/framework? Please include a snippet of code that shows how you've used it.
=> React.js most important feature added is React hooks for functional components. They allow states in functional components. Code explaaning usage of useEffect, useState hook:
const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3100/covid-data`)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    },[]);

4. How would you track down a performance issue in production? Have you ever had to do this?
=> There could be 2 approaches:
1. Use performance monitoring tools.
2. Perform performance testing and omit the tools.

5. List of all the libraries and packages used to complete the assignment
For front-end React apllication:  
    "@types/react-router-dom": "^5.1.7",
    "bootstrap": "^4.6.0",
    "jquery": "^3.5.1",
    "popper.js": "^1.16.1",
    "react-minimal-pie-chart": "^8.1.0",
    "react-router-dom": "^5.2.0",
    "reactstrap": "^8.9.0",

For back-enfd Node.Js application:
    "cors": "^2.8.5",
    "csv-parser": "^3.0.0",
    "express": "^4.17.1",
    "mongodb": "^3.6.4",
    "mongoose": "^5.11.15",
    "request": "^2.88.2"
