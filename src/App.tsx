import './App.css'

function App() {

    function testBackend() {
        console.log('test backend')
    }

    return (
        <div className="ml-4">
            <h1 className="text-3xl font-bold">
                Simple react app
            </h1>
            <button className="cursor-pointer bg-gray-100 mt-4 p-1 rounded hover:bg-gray-200" onClick={testBackend}>
                Test backend
            </button>
        </div>
    )
}

export default App
