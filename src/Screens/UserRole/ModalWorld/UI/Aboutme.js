const Aboutme = (props) => {
    return(
    <>
    <div className="card rounded-xl p-sm-5 p-3 black-bg mb-3">
                    <h4 className="text-white mb-4">
                      <b>About Me</b>
                    </h4>
                    <p className="m-0 text-white-50">
                      {props.content}
                    </p>
                  </div>
    </>
    )
    
    }
    export default Aboutme;

