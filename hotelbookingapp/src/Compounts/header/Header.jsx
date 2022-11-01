import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faTaxi } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

function Header() {
  const [open, setopen] = useState(false);
  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openoption, setopenoption] = useState(false);
  const [option, setoption] = useState({
    adult: 1,
    chidren: 0,
    room: 1,
  });


  const handleOption = (name , operation) => {
    setoption(prec => {return {
      ...prec, [name]: operation === "i" ? option[name] +1 :option[name] -1,
    }})
  }

  return (
    <div className="header">
      <div className="headerContainers">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rental</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attraction</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>
        </div>

        <h1 className="headertitle">A life of discount? It's Genius</h1>
        <p className="headerDesc">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Lamabooking account
        </p>
        <button className="headerBtn"> Sign In / Register</button>

        <div className="headerSearch">
          <div className="headerSearchItam">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going"
              className="headerSerachInput"
            />
          </div>
          <div className="headerSearchItam">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setopen(!open)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>

            {open && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setdate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItam">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headerSearchText">{`${option.adult} adult . ${option.chidren} children . ${option.room} room`}</span>

            <div className="option">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                <button className="optionCounterBtn" onClick={() => handleOption("adult", "d")}>-</button>
                <span className="optionCounterNumber">1</span>
                <button className="optionCounterBtn" onClick={() => handleOption("adult", "i")}>+</button>
                </div>
              </div>

              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                <button className="optionCounterBtn" onClick={() => handleOption("children", "d")}>-</button>
                <span className="optionCounterNumber">1</span>
                <button className="optionCounterBtn" onClick={() => handleOption("children", "i")}>+</button>
                </div>
              </div>

              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                <button className="optionCounterBtn" onClick={() => handleOption("room", "d")}>-</button>
                <span className="optionCounterNumber">1</span>
                <button className="optionCounterBtn" onClick={() => handleOption("room", "i")}>+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="headerSearchItam">
            <button className="headerBtn"> Search</button>
          </div>
          l
        </div>
      </div>
    </div>
  );
}

export default Header;
