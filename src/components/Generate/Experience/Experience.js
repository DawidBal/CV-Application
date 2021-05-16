import React from 'react'
import Button from '../../Utilities/Button'
import ExperienceForm from './ExperienceForm'

const Experience = (props) => {
    const { data, setData, dataList, setDataList, updateData, updateListData, submit } = props

    return (
        <div className="experience">
            <h3>Experience</h3>
            { dataList.map((expItem, index) => <ExperienceForm key={expItem.id} id={expItem.id} data={expItem} onChange={(e) => updateListData(e, expItem, dataList, setDataList, index)} />) }
            <ExperienceForm data={data} onChange={(e) => updateData(e, setData, data)}/>
            <Button className="btn" title="+ Add" onClick={submit} />
        </div>
    )
}

export default Experience
