import FormD1 from '../atoms/formD1'
import FormD2 from '../atoms/formD2'

function Form({ submitForm, quiz, dex, getNextQuestion, getPrevQuestion }) {
  return (
    <form
      action=''
      className='flex flex-col h-full items-center pt-32 '
      onSubmit={submitForm}
    >
      <div className=' w-full'>
        {dex < quiz.length ? (
          <div className='  w-full'>
            <FormD1
              quiz={quiz}
              dex={dex}
              getNextQuestion={getNextQuestion}
              getPrevQuestion={getPrevQuestion}
            />
          </div>
        ) : (
          <div>
            <FormD2 getPrevQuestion={getPrevQuestion} />
          </div>
        )}
      </div>
    </form>
  )
}

export default Form
