import { PrimaryButton } from '@fluentui/react'
import { compose } from 'ramda'
import React from 'react'
import { withAuth } from './hoc/withAuth'

const App: React.FC = () => {
    return (
        <div className="fl-grid">
            <div className="fl-span6c">
                <PrimaryButton>Button</PrimaryButton>
            </div>
        </div>
    )
}

export default compose(withAuth)(App)
