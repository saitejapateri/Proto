import React, { useEffect, useState } from "react";
import HeaderNav from "./HeaderNav";
import palette from "../theme/palette";
import { Stack } from "@mui/material";
import { useParams, useLocation } from "react-router-dom";
import { Document, Page } from "react-pdf";

function Pdf() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const url = params.get("url");
  console.log(url);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(numPages) {
    setNumPages(numPages);
  }

  const [dashboardData, setDashboardData] = useState({});
  console.log(dashboardData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dashboardResponse] = await Promise.all([
          fetch(
            "https://stagingstudentpython.edwisely.com/reactProject/dashboardData"
          ),
        ]);
        const dashboardDetails = await dashboardResponse.json();
        setDashboardData(dashboardDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Stack sx={{ width: "100%", backgroundColor: palette.primary[0] }}>
      <HeaderNav profileImg={dashboardData.profile_picture} />
      <hr style={{ marginTop: "40px" }} />
      <div id="pdf">
        <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </Stack>
  );
}

export default Pdf;
