function Login(){
    return(
        <div className="bg-yellow-200 flex justify-center items-center h-screen">
            <div className="bg-white rounded-md shadow-md">
                <input className="p-1 m-3 rounded-md border-2" type="text" placeholder="Email"/>
                <br></br>
                <input className="p-1 m-3 rounded-md border-2" type="text" placeholder="Password"/>
                <div className="m-3 text-center">Login</div>
            </div>
        </div>
    );
}

export default Login;