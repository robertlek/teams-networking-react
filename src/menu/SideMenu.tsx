export function SideMenu() {
    return (
        <div id="side-menu">
            <div id="upper-side-menu">
                <h4>
                    <i className="fa-solid fa-id-card margin-right-md"></i>
                    <span id="text-contact-me-label">Contact me:</span>
                </h4>
                <form action="/index.html" method="get">
                    <label htmlFor="user-email" id="text-user-email-label">
                        Your email address:
                    </label>
                    <input type="email" id="user-email" name="user-email" placeholder="example@me.com" required />
                    <label htmlFor="user-name" id="text-user-name-label">
                        Your full name:
                    </label>
                    <input type="text" id="user-name" name="user-name" placeholder="John Doe" required />
                    <button type="submit">
                        <i className="fa-solid fa-paper-plane margin-right-md"></i>
                        <span id="text-contact-me-button">Contact me!</span>
                    </button>
                </form>
            </div>
            <div id="lower-side-menu">
                <h4>
                    <i className="fa-solid fa-id-card-clip margin-right-md"></i>
                    <span id="text-personal-details-label">Personal details:</span>
                </h4>
                <ul>
                    <li>
                        <i className="fa-solid fa-circle-user margin-right-md"></i>
                        <span id="text-current-age">Current age:</span> <b>21</b>
                    </li>
                    <li>
                        <i className="fa-solid fa-globe margin-right-md"></i>
                        <span id="text-location">Location:</span> <b>Romania, Sibiu</b>
                    </li>
                    <li>
                        <i className="fa-solid fa-phone margin-right-md"></i>
                        <span id="text-phone-number">Phone number:</span> <b>0747577171</b>
                    </li>
                    <li>
                        <i className="fa-solid fa-envelope margin-right-md"></i>
                        <span id="text-email-address">Email address:</span> <b>lecarobertandrei@gmail.com</b>
                    </li>
                </ul>
            </div>
        </div>
    );
}
