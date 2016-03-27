App = React.createClass({
    mixins: [ReactMeteorData],
	getMeteorData() {
		return {
            name: User.find({}).fetch()[0].user[0].name,
			friends: User.find({}).fetch()[0].user[0].friends
		}
	},
    renderFriends() {
        let key = 0
        let myname = this.data.name
        return (
            <div>
                {
                    this.data.friends.map(function(i){
                        return <a href={'/content/' + myname +'/' + i.name} key={key++}><Box name={i.name} content='aaa'/></a>
                    })
                }
            </div>    
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
                {this.renderFriends()}
            </div>
        )
    }
})