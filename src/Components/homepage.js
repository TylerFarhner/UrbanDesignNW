import Footer from "./app_footer";
import Body from "./home_body";
import Header from "./home_header";

function Homepage() {
    return (
        <div>
            <Header main_text='[ Urban Design NW ]' secondary_text='Landscape & Maintenance' third_text='Serving the Greater Eastside' />
            <Body />
            <Footer />
        </div>
    );
}

export default Homepage
