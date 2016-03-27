Index = React.createClass({
    mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			userlist: Userlist.find({}).fetch()
		}
	},
    getInitialState() {
        return {
            used: true,
            in: false
        }
    },
    handleClick() {
        let user = this.refs.input.value
        console.log(this.data.userlist[0].name) 
        if(contains(this.data.userlist[0].name, user)) {
            this.setState({used: true, in: true})
        } else {
            this.setState({used: false})
        }
        function contains(a, obj) {
            for (var i = 0; i < a.length; i++) {
                if (a[i] === obj) {
                    return true;
                }
            }
            return false;
        }  
    },
    signup() {
        Userlist.update({"_id" : "1"}, {$push : {name : this.refs.input.value}})
        this.setState({used: true})
    },
    render() {
        return(<div>
            {this.state.in ? <MainLayout content=<App user={this.refs.input.value}/>/> : <div>
                <h1 id='signtxt'>My Messages</h1>
                <div className='signbox'>
                    你叫？<input ref='input'></input>
                    <button onClick={this.handleClick}><i className="fa fa-sign-in"></i></button><br/>
                    {this.state.used ? null : <a onClick={this.signup} href='#'>第一次使用？猛击我加入用户列表</a>}
                </div>
            </div>}</div>
        )
    }
})