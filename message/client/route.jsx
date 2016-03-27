FlowRouter.route('/', {
    action() {
        ReactLayout.render(Index)
    }
})
FlowRouter.route('/home', {
    action() {
        ReactLayout.render(MainLayout, {content: <App/>})
    }
})
FlowRouter.route('/content/:my/:target', {
    action({my, target}) {
        ReactLayout.render(MainLayout, {content: <Content c={my} s={target}/>})
    }
})