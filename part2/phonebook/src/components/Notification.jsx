const Notification = ({ message }) => {
  if (message === null) { return null }
  
  const successStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  const failStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  const style = message.type === 'success' ? successStyle : failStyle

  return (
    <div style={style}>
      {message.message}
    </div>
  )
}

export default Notification