import Button from 'react-bootstrap/Button';

export const Tags = (props) => {
  return (
        <Button variant={props.color}> {props.btn} </Button>
  )
}

export default Tags