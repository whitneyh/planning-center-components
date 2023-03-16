/*
 * Copyright 2023 Whitney Hunter
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react"
import "./LoginToggle.css"

export interface LoginProps {

}

const LoginToggle = (props: LoginProps) => {
    return (
        <button>
            <div className='image'></div>
            <div className='margin'></div>
            <div className='padding-right'>
                <svg color="#264703" height="16" viewBox="0 0 16 16" width="16" style={{margin: '-3px;'}}>
                    <title>chevron</title>
                    <polygon fill="currentColor" points="11.931 4.892 8 8.824 4.069 4.892 2.927 6.034 8 11.108 9.142 9.966 13.073 6.034 11.931 4.892"></polygon>
                </svg>
            </div>
        </button>
    )
}

export default LoginToggle
