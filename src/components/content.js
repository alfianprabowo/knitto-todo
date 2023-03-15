import AddButton from "./buttons/add_button";
import Todo from ".//todo";

const Content = () => {

    return (
        <div class="xs:p-4 sm:p-10">
            <AddButton text={'Add Todo'} />

            <Todo title={'Lorem Ipsum'} completed={true} />
        </div>
    )
}

export default Content;