 function text(){
  let time=new Date();
  return(
    
      <p>This is the clock that shows the time in Bharat at all times .
        This is the current time : {time.toLocaleDateString()}-{time.toLocaleTimeString()}
      </p>
    
  );
}
export default text;