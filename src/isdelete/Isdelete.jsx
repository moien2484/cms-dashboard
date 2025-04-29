import React from "react";
import "./Isdelete.css";
export default function Isdelete({submit , cancel}) {
  return (
    <div className="parent-delete">
      <div className="form-delet rounded">
        <p className="text-delete">آیا از حذف اطمینان دارید؟</p>
        <div className="perent-btn-delete">
          <button onClick={submit} className="yes-delete rounded">بله</button>
          <button onClick={cancel} className="not-delete rounded">خیر</button>
        </div>
      </div>
    </div>
  );
}
