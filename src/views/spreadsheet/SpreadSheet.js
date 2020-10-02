import React from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CDataTable,
  CBadge,
} from "@coreui/react";
import usersData from "../users/UsersData";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

const fields = ["name", "registered", "role", "status"];

const SpreadSheet = () => {
  return (
    <CCard>
      <CCardHeader>
        <b>Data</b>
        <div className="card-header-actions">
          <CDropdown className="m-1 btn-group">
            <CDropdownToggle color="primary" placement="right">
              Options
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem header>Header</CDropdownItem>
              <CDropdownItem disabled>Action Disabled</CDropdownItem>
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem>Another Action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </div>
      </CCardHeader>
      <CCardBody>
        <CDataTable
          items={usersData}
          fields={fields}
          hover
          striped
          bordered
          size="sm"
          itemsPerPage={10}
          pagination
          scopedSlots={{
            status: (item) => (
              <td>
                <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
              </td>
            ),
          }}
        />
      </CCardBody>
    </CCard>
  );
};

export default SpreadSheet;
