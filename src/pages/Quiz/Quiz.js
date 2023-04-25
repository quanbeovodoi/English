import Exams from '~/layouts/Exams';
import config from '~/config';
function Quiz() {
    return ( <Exams data={config.data} /> );
}

export default Quiz;