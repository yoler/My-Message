Content = React.createClass({
    mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			message: User.find({}).fetch()[0].user[0].friends[0].content
		}
	},
    handleClick() {
        User.update({"_id": "2"}, {$push: {"user.0.friends.0.content" : {type: "push", text: this.refs.mess.value, time: new Date()}}})
        console.log(JSON.stringify(this.data.message))
    },
    renderMessage() {
        let c = this.props.c
        let s = this.props.s
        return(
            this.data.message.map(function(i) {
                if(i.type === 'push') {
                    return <h2>{c + i.time + i.text}</h2>
                } else if(i.type === 'pull') {
                    return <h2>{s + i.time + i.text}</h2>
                }
            })
        )
    },
    render() {
        return(
            <div style={{
                position: 'absolute',
                top: 100,
                bottom: 100,
                width: '1000px',
                left: '50%',
                marginLeft: '-500px',
            }}>
                <a href="/home" style={{
                    position: 'absolute',
                    fontSize: 30,
                    color: '#fff',
                    top: -70,
                    left: -20,
                }}><i className="fa fa-reply"></i></a>
                <h1>对方是{this.props.s}</h1>
                <p>我是{this.props.c}</p>
                <input ref="mess" type="text"/><button onClick={this.handleClick}>发送</button>
                {this.renderMessage()}
            </div>
        )
    }
})