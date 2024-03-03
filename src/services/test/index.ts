import colors from 'colors'
import Logger from '../../helpers/logger'
import testModel from "../../models/test";

const testService = {
    test: (test: string) => {
        try {
            const result = testModel.test(test)
            return result.toUpperCase()
        } catch (error) {
            Logger.error(colors.red('Error TestService test '), error as Error)
            throw new Error('TECHNICAL ERROR')
        }
    }
}

export default testService