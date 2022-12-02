import './Register.css';

const Register = () => {
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
                  <label>username</label>
                  <input type="text" class="form-control" name="username" />
               </div>
               <div class="form-group">
                  <label>phone number</label>
                  <input type="number" class="form-control" name="phone" />
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
export default Register;