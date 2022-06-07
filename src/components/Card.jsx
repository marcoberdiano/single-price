const Card = () => {
    return ( 
        <div className="card-container">

            <div className="item1">
                <h1>Join our community</h1>
                <h2>30-day, hassle-free money back guarantee</h2>
                <p>
                    Gain access to our full library of tutorials along with expert code reviews. 
                    Perfect for any developers who are serious about honing their skills.
                </p>
            </div>

            <div className="item2">
                <h3>Monthly Subscription</h3>
                <div className="price">
                    <div className="dolar">$29</div>
                    <div className="month">per month</div>
                </div>
                <p>Full access for less than $1 a day</p>
                <button className="btn">Sign Up</button>
            </div>

            <div className="item3">
                <h3>Why Us</h3>
                <ul>
                    <li>Tutorials by industry experts</li>
                    <li>Peer &amp; expert code review</li>
                    <li>Coding exercises</li>
                    <li>Access to our GitHub repos</li>
                    <li>Community forum</li>
                    <li>Flashcard decks</li>
                    <li>New videos every week</li>
                </ul>
            </div>

        </div>
     );
}
 
export default Card;
