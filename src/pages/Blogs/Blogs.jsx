import useTitle from "../../hooks/useTitle";


const Blogs = () => {
    useTitle("Blog");
    return (
        <div className="space-y-7">
            <h1 className="text-center font-bold text-4xl mt-3">Questions & Answers</h1>
            <h2 className="text-xl font-bold mt-5">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
            <p><span className="font-bold">Ans:  </span> An access token and a refresh token are both used in authentication and authorization systems, typically in the context of web applications and APIs. <br />

                Access Token:
                An access token is a credential that is issued by an authentication server to a client after successful authentication. It represents the authorization granted to the client to access protected resources on behalf of the authenticated user.

                <br /> Refresh Token:
                A refresh token is a long-lived credential that is also issued by the authentication server during the authentication process. Its purpose is to obtain a new access token once the current access token expires or becomes invalid.
                <br />It is crucial to store access tokens and refresh tokens securely on the client-side to prevent unauthorized access or token theft. <br />
                - Access tokens most common approach is to store access tokens in browser cookies with the HttpOnly and Secure attributes set, which prevents client-side JavaScript access and ensures the token is transmitted only over secure HTTPS connections.
                <br />
                - Refresh tokens common approach is to store refresh tokens in an HTTP-only cookie. Another option is to store them in secure client-side storage mechanisms such as browser local storage or encrypted browser databases.
            </p>

            <h2 className="text-xl font-bold mt-5">2.
                Compare SQL and NoSQL databases?
            </h2>
            <p><span className="font-bold">Ans:   </span>SQL (Structured Query Language) and NoSQL (Not only SQL) databases are two different types of database systems that have distinct characteristics and are used for different purposes. A comparison between SQL and NoSQL databases:
                <br />
                1. Data Model:
                - SQL databases: SQL databases follow a structured data model based on tables with predefined schemas.

                - NoSQL databases: NoSQL databases offer a different types such as key-value stores, document databases, columnar databases, and graph databases.
                <br />
                2. Scalability:
                - SQL databases: SQL databases are typically vertically scalable, meaning they can handle increasing loads by adding more powerful hardware resources to a single server.

                - NoSQL databases: NoSQL databases are designed to be horizontally scalable. They distribute data across multiple servers, allowing for seamless scaling by adding more servers to the database cluster.
                <br />
                3. Query Language:
                - SQL databases: SQL databases use SQL as the standard query language for data manipulation and retrieval.
                - NoSQL databases: NoSQL databases have varying query languages, which depend on the specific type of NoSQL database being used.
                <br />
                4. Schema Flexibility:
                - SQL databases: SQL databases enforce a predefined schema, which means the structure of the data must be defined upfront.

                - NoSQL databases: NoSQL databases offer greater flexibility in terms of schema.


            </p>
            <h2 className="text-xl font-bold mt-5">3.What is express js? What is Nest JS?</h2>
            <p><span className="font-bold">Ans:  </span>
                Express.js is a popular and widely used web application framework for Node.js. It provides a minimalistic and flexible set of features for building web applications and APIs. Express.js simplifies the process of creating server-side applications by offering a straightforward routing system, middleware support, and a range of HTTP utility methods. <br />

                Nest JS:
                Nest JS is a progressive, extensible, and scalable framework for building efficient server-side applications with Node.js. It is built on top of Express.js and adds additional features and architectural patterns to enhance developer productivity and maintainability. Nest JS follows the modular and component-based approach inspired by Angular, a popular front-end framework.

            </p>
            <h2 className="text-xl font-bold mt-5">4.What is MongoDB aggregate and how does it work ?</h2>
            <p><span className="font-bold">Ans:  </span>MongoDBs aggregation framework is a powerful feature that allows for advanced data processing and analysis within the database. It provides a way to perform complex data manipulations, transformations, and computations on the data stored in MongoDB collections.  An overview of MongoDBs aggregation framework and how it works: <br />
                The aggregation pipeline stages can include operations like filtering, grouping, sorting, projecting, joining, and computing aggregations.
                MongoDBs aggregation pipeline provides a rich set of stages to perform a wide range of operations. Some commonly used stages include:
                The output of the aggregation pipeline is the result of the last stage in the pipeline. It can be customized to include only the required fields or to include additional computed fields based on the aggregation operations.

                The result of an aggregation query can be returned as a cursor, allowing for efficient handling of large result sets. Additionally, MongoDB provides methods to control the output format, allowing for options like returning the result as an array or as a cursor.

                MongoDBs aggregation framework is a versatile tool for performing complex data analysis, transformation, and computation within the database itself. It enables developers to leverage the power of the database to efficiently process and analyze data, reducing the need for additional round-trips between the application and the database.</p>


        </div>
    );
};

export default Blogs;