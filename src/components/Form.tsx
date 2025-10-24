import Button from "./Button"
export const Form = () => {
  return (
    <div className="mb-[300px] absolute top-[-200px] left-0 right-0 text-center py-10 px-6 bg-navy-850 rounded-[9px] w-[336px]
     mx-auto ">
        <h2 className="font-bold mb-4 text-[20px]">  Get early access today</h2>
        <p className="px-6 text-sm mb-8">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
        questions, our support team would be happy to help you.
        </p>
        <form className="flex flex-col gap-6 "  action="">
            <input 
                className="bg-white rounded-3xl placeholder:text-gray-400 text-center h-12"
                type="email" 
                placeholder="email@example.com"></input>
            <Button text='Get Started For Free'>Submit</Button>
        </form>
    </div>
  )
}


