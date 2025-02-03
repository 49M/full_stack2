function start() {
    class Bookmark extends React.Component {
        constructor(props) {
            super(props);
            console.log("Bookmark component created");
        }
        title = this.props.title;
        titleStyle = { color : "blue" }
        render() {
            return (
                <li>
                    <h2 style={this.titleStyle}>{this.title}</h2>
                    <a target="_blank" rel="noopener noreferrer" href={this.props.href}>{this.props.description}</a>
                    <button onClick={() => {
                        this.title = this.title + "-Changed";
                        this.setState({});
                    }}>Click me</button>
                </li>
            );
        }
    }
    ReactDOM.render(
        <div>
            <h1>Bookmarks</h1>
            <ul>
                <Bookmark title={"Developian"} 
                  href={"https://main-bvxea6i-nf7smjfwr2mu4.ca-1.platformsh.site/"} 
                  description={"Goal Tracker"} />
                <Bookmark title={"Michal Buczek"}
                  href={"https://www.linkedin.com/in/michal-buczek-99b64b278/"}
                  description={"LinkedIn"} />
            </ul>
        </div>,
        document.getElementById("mainContainer")
    );
}