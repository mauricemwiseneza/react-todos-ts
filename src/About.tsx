import NavBar from "./NavBar";

export default function About() {
    return (
        <div className="container">
            <NavBar />
            <h1 className="card-title mb-5" >About This Todo App</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">
                                This todo app is designed to help you manage your tasks efficiently. With a simple and intuitive interface, you can easily add, edit, and delete tasks to keep track of what needs to be done.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">
                                By organizing your tasks in one place, this app helps you save time and stay focused on what's important. Whether you're managing personal errands or work projects, this todo app is here to help you stay on top of your responsibilities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
