import './Login.css';

const Login=()=>{
    return (<div className="container">
    <div className="row">
       <div className="col-4">

       </div>
       <div className="col-4 text-center">
          <form>
             <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control" name="email" />
             </div>
             <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" name="password" />
             </div>

             <button type="submit" class="btn btn-primary">Submit</button>
          </form>
       </div>
       <div className="col-4">

       </div>
    </div>
 </div>)
}
export default Login;