/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
// @flow
import React, { useEffect, useState, useRef } from 'react'
import Carousel from 'react-material-ui-carousel'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCog, faCode, faBullhorn, faMicrochip, faRocket,
} from '@fortawesome/free-solid-svg-icons'
import membersData from '../../../data/members.json'
import placeholder from '../../../images/placeholder-rectangle.png'
import { LARGE_WIDTH, MEDIUM_WIDTH, MOBILE_WIDTH } from '../../../constants'
import MemberModal from './MemberModal/MemberModal'
import './MembersGrid.css'

type Member = {
  id: number,
  name: string,
  lastname: string,
  github: string,
  github_user: string,
  linkedin: string,
  resume_link: string,
  description: string,
  class: string,
  semesters: string,
  subtitle: string,
  status: string,
  role: string
};

const inactiveMembers = membersData.members.filter((member) => member.status === 'inactive')
const activeMembers = membersData.members.filter((member) => member.status === 'active' || member.status === 'comitee')

const numberOfGridCols = () => {
  if (window.innerWidth >= LARGE_WIDTH) {
    return 5
  }
  if (window.innerWidth >= MEDIUM_WIDTH) {
    return 4
  }
  if (window.innerWidth >= MOBILE_WIDTH) {
    return 3
  }
  return 2
}

const tryRequire = (imgPath: string) => {
  try {
    return require(`../../../images/members/${imgPath}`)
  } catch (err) {
    return placeholder
  }
}

function MembersGrid() {
  const [showModal, setShowModal] = useState(false)
  const [memberIndex, _setMemberIndex] = useState(0)
  const [active, setActive] = useState(true)
  const [gridCols, setGridCols] = useState(numberOfGridCols())

  const memberIndexRef = useRef(memberIndex)

  const setMemberIndex = (index) => {
    memberIndexRef.current = index
    _setMemberIndex(index)
  }

  useEffect(() => {
    const updateGridCols = () => {
      setGridCols(numberOfGridCols())
    }

    const keyListener = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        setShowModal(false)
      }
      if (event.keyCode === 37) {
        if (memberIndexRef.current === 0) {
          const listLenght = active ? activeMembers.length : inactiveMembers.length
          setMemberIndex(listLenght - 1)
        } else {
          setMemberIndex(memberIndexRef.current - 1)
        }
      } else if (event.keyCode === 39) {
        const listLenght = active ? activeMembers.length : inactiveMembers.length
        setMemberIndex((memberIndexRef.current + 1) % listLenght)
      }
    }

    window.addEventListener('resize', updateGridCols)
    document.addEventListener('keydown', keyListener, false)

    return () => {
      window.removeEventListener('resize', updateGridCols)
      document.removeEventListener('keydown', keyListener)
    }
  }, [])

  const memberIcon = (role: string) => {
    if (role === 'Software Development') {
      return faCode
    } if (role === 'Electronics') {
      return faMicrochip
    } if (role === 'Mechanical Design') {
      return faCog
    } if (role === 'Logistics & Sponsorship') {
      return faBullhorn
    }
    return faRocket
  }

  const renderGridList = (members: Array<Member>, title: string) => (
    <div>
      <div
        style={{ display: (title === '') ? 'none' : 'block' }}
        className="grid-title"
      >
        <h1 className="grid-title-text">
          { title }
        </h1>
      </div>
      <GridList
        cellHeight="auto"
        className="members-grid"
        cols={gridCols}
        spacing={3}
      >
        { members.map((member, index) => (
          <GridListTile
            key={member.id}
            cols={1}
            id={`members-grid-tile-${member.id}`}
            className="members-grid-tile"
            onClick={() => {
              setShowModal(true)
              setMemberIndex(index)
              setActive(member.status !== 'inactive')
            }}
          >
            <div className="member-image-container">
              <img
                className="member-image"
                src={tryRequire(`${member.id}.jpg`)}
                alt={member.name}
              />
              <div className="member-image-content">
                <p>
                  { `${member.name} ${member.lastname}` }
                </p>
                <div className="member-image-icon">
                  <FontAwesomeIcon
                    icon={memberIcon(member.role)}
                    size="1x"
                  />
                </div>
              </div>
            </div>
          </GridListTile>
        )) }
      </GridList>
    </div>
  )

  const memberList = active ? activeMembers : inactiveMembers
  return (
    <div className="members-grid-container" data-testid="members-grid-container">
      { renderGridList(activeMembers, '') }
      { renderGridList(inactiveMembers, 'RoBorregos Legacy') }
      <Modal
        className="modal-container"
        data-testid="modal-container"
        show={showModal}
        dialogAs={() => (
          <Carousel
            className={`member-carrousel-${String(active)}`}
            navButtonsAlwaysVisible
            autoPlay={false}
            timeout={200}
            fullHeightHover={false}
            indicators={false}
            onChange={(next) => setMemberIndex(next)}
            index={memberIndex}
            startAt={memberIndex}
          >
            {
              memberList.map((member) => (
                <MemberModal
                  member={member}
                  onHide={() => setShowModal(false)}
                />
              ))
            }
          </Carousel>
        )}
      />
    </div>
  )
}

export default MembersGrid
