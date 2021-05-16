import React from 'react'
import Button from '../../Utilities/Button'
import EducationForm from './EducationForm'

const Education = (props) => {
    const { data, setData, dataList, setDataList, updateData, updateListData, submit } = props

    return (
        <div className="Education">
            <h3>Education</h3>
            { dataList.map((eduItem, index) => <EducationForm key={eduItem.id} data={eduItem} onChange={(e) => updateListData(e, eduItem, dataList, setDataList, index)} />) }
            <EducationForm data={data} onChange={(e) => updateData(e, setData, data)}/>
            <Button className="btn" title="+ Add" onClick={submit} />
        </div>
    )
}

export default Education
