import React from 'react';
import {useLocation} from '@docusaurus/router';
import DropdownNavbarItem from '@theme-original/NavbarItem/DropdownNavbarItem';

export default function DropdownNavbarItemWrapper(props) {
  const {pathname} = useLocation();
  
  const activeSubItem = props.items.find(item => {
    if (item.to && pathname.startsWith(item.to)) return true;
    if (item.activeBaseRegex && new RegExp(item.activeBaseRegex).test(pathname)) return true;
    return false;
  });

  const customLabel = (
    <span style={{ 
      position: 'relative', 
      display: 'inline-block',
      lineHeight: '2rem' 
    }}>
      <span style={{ verticalAlign: 'middle' }}>
        {props.label}
      </span>
      
      {activeSubItem && (
        <span 
          className="navbar-custom-sublabel" 
          style={{ 
            fontSize: '11px', // O něco větší pro lepší čitelnost stejného fontu
            fontWeight: 'inherit', // Přebírá tloušťku z hlavního nápisu
            fontFamily: 'inherit', // Přebírá přesný typ písma
            color: 'var(--ifm-color-primary)', 
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            textTransform: 'uppercase',
            lineHeight: '1',
            letterSpacing: 'inherit' // Přebírá i rozestupy písmen
          }}>
          <span style={{ marginRight: '3px', fontSize: '12px' }}>↳</span> 
          {activeSubItem.label}
        </span>
      )}
    </span>
  );

  return (
    <DropdownNavbarItem
      {...props}
      label={customLabel}
    />
  );
}