import * as React from 'react';
import Popover from '@mui/material/Popover';
import { Svg } from 'components/Icons/Icons';
import { useDispatch } from 'react-redux';
import { logOutModal } from "store/modal/modalSlice"
import css from "./BasicPopover.module.css"

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const dispatch = useDispatch();

  return (
    <div>
      <button aria-describedby={id} variant="contained" onClick={handleClick} className={css.popoverButton}>
        <Svg id="#unfold" width={16} height={16}/>
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        onClose={handleClose}
        disableRestoreFocus
        >
          <div className={css.listWrapper}>
            <ul className={css.list}>
              <li className={css.item}>
                {/* <button type="button" onClick={()=>dispatch(showModal())} className={css.btn}>
                  <Svg id="#setting" width={16} height={16}/>
                  <span className={css.text}>Setting</span>
                </button> */}
                zzzzzzzz
              </li>
              <li>
                <button type="button" onClick={()=>dispatch(logOutModal())} className={css.btn}>
                  <Svg id="#exit" width={16} height={16}/>
                  <span className={css.text}>Log out</span> 
                </button>
              </li>
            </ul>
          </div>
      </Popover>
    
    </div>
  );
}
