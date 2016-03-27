Box = ({name, content}) => (
    <div style={{
        height: 100,
        width: 760,
        margin: '20px auto',
        backgroundColor: '#017cdc',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        border: '5px solid #017cdc',
    }}>
        <div style={{
            width: '20%',
            textAlign: 'center',
            // backgroundColor: '#f17fdc',
            fontSize: 30,
            color: '#fff',
        }}><Point/>&nbsp;&nbsp;{name}</div>
        <div style={{
            width: '78%',
            height: '100%',
            textAlign: 'left',
            backgroundColor: '#fff',
            lineHeight: '90px',
        }}>{content}</div>
    </div>
)
Point = () => <i className="fa fa-circle-o" style={{color: 'red'}}></i>