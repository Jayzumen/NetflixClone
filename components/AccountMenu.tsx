import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Link from "next/link";
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
    <div>
      <Button
        id='account-button'
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className='!capitalize !text-white'>
        <Image
          src='https://rb.gy/g1pwyx'
          alt='Account Logo'
          className='cursor-pointer rounded'
          width={30}
          height={30}
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
          <MenuItem onClick={handleClose}>
            <Link href='/myList'>Account</Link>
          </MenuItem>
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
