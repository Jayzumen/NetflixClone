import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { logout } = useAuth();

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className=''>
      <Button
        id='account-button'
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className='!capitalize !text-white'>
        <img
          src='https://rb.gy/g1pwyx'
          alt='Account Logo'
          className='cursor-pointer rounded'
        />
      </Button>
      <Menu
        id='account-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className='accountMenu '
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        <div>
          <MenuItem onClick={handleClose}>Account</MenuItem>
          <MenuItem onClick={handleClose}>Help Center</MenuItem>
        </div>

        <div className='!border-t'>
          <MenuItem onClick={logout}>Sign out of Netflix</MenuItem>
        </div>
      </Menu>
    </div>
  );
}

export default AccountMenu;
