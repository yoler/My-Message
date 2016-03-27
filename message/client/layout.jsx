MainLayout = React.createClass({
    render() {
        return(
            <div>
                <header style={{
                    height: 100,
                    width: '100%',
                    backgroundColor: '#017cdc',
                    fontSize: 50,
                    textAlign: 'center',
                    lineHeight: '100px',
                    color: '#fff',
                }}>My Messages</header>
                {this.props.content}
                <footer style={{
                    height: 100,
                    width: '100%',
                    position: 'absolute',
                    bottom: 0,
                    borderTop: '1px solid #017cdc',
                    textAlign: 'center',
                    lineHeight: '100px',
                }}>designed by yoler</footer>
            </div>
        )
    }
})