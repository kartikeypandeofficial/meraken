import React, { useState } from "react";
import GenerativeAi from "./services/AiDataScience/GenerativeAi";
import AiSolutions from "./services/AiDataScience/AiSolutions";
import MachineLearning from "./services/AiDataScience/MachineLearning";
import BusinessIntelligence from "./services/AiDataScience/BusinessIntelligence";
import ComputerVision from "./services/AiDataScience/ComputerVision";
import DataAnnotation from "./services/AiDataScience/DataAnnotation";
import DataScience from "./services/AiDataScience/DataScience";
import NLP from "./services/AiDataScience/NLP";
import AgenticAi from "./services/CoreServices/AgenticAi";
import ApiIntegration from "./services/CoreServices/ApiIntegration";
import CloudDeployment from "./services/CoreServices/CloudDeployment";
import GenAiModelTuning from "./services/CoreServices/GenAiModelTuning";
import Mcp from "./services/CoreServices/Mcp";
import RagChatBot from "./services/CoreServices/RagChatBot";
import UXDesign from "./services/CoreServices/UXDesign";
import Branding from "./services/ProductDesign/Branding";
import DesignSystems from "./services/ProductDesign/DesignSystems";
import ProductDesignComp from "./services/ProductDesign/ProductDesign";
import UserExperience from "./services/ProductDesign/UserExperience";
import UserInterface from "./services/ProductDesign/UserInterface";
import UxWriting from "./services/ProductDesign/UxWriting";

function Homepage() {
  const [selectedComponent, setSelectedComponent] = useState("");
  const [selectedCoreService, setSelectedCoreService] = useState("");
  const [selectedProductDesign, setSelectedProductDesign] = useState("");

  return (
    <div>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <select
          value={selectedComponent}
          onChange={(e) =>{setSelectedComponent(e.target.value);
              setSelectedCoreService("");
              setSelectedProductDesign("")}
          }
        >
          <option value="GenerativeAi">Generative AI</option>
          <option value="AiSolutions">AI Solutions</option>
          <option value="MachineLearning">Machine Learning</option>
          <option value="BusinessIntelligence">Business Intelligence</option>
          <option value="ComputerVision">Computer Vision</option>
          <option value="DataAnnotation">Data Annotation</option>
          <option value="DataScience">Data Science</option>
          <option value="NLP">NLP</option>
        </select>
          <select
              value={selectedCoreService}
              onChange={(e) => {
                  setSelectedCoreService(e.target.value);
                  setSelectedComponent("");
                  setSelectedProductDesign("");
              }}
          >
          <option value="">Core Services</option>
          <option value="AgenticAi">Agentic AI</option>
          <option value="ApiIntegration">API Integration</option>
          <option value="CloudDeployment">Cloud Deployment</option>
          <option value="GenAiModelTuning">GenAI Model Tuning</option>
          <option value="Mcp">MCP</option>
          <option value="RagChatBot">RAG ChatBot</option>
          <option value="UXDesign">UX Design</option>
        </select>
          <select
              value={selectedProductDesign}
              onChange={(e) => {
                  setSelectedProductDesign(e.target.value);
                  setSelectedComponent("");
                  setSelectedCoreService("");
              }}
          >
          <option value="">Product Design</option>
          <option value="Branding">Branding</option>
          <option value="DesignSystems">Design Systems</option>
          <option value="ProductDesign">Product Design</option>
          <option value="UserExperience">User Experience</option>
          <option value="UserInterface">User Interface</option>
          <option value="UxWriting">UX Writing</option>
        </select>
      </div>
      {/* Data Science Dropdown */}
      {selectedComponent === "GenerativeAi" && <GenerativeAi />}
      {selectedComponent === "AiSolutions" && <AiSolutions />}
      {selectedComponent === "MachineLearning" && <MachineLearning />}
      {selectedComponent === "BusinessIntelligence" && <BusinessIntelligence />}
      {selectedComponent === "ComputerVision" && <ComputerVision />}
      {selectedComponent === "DataAnnotation" && <DataAnnotation />}
      {selectedComponent === "DataScience" && <DataScience />}
      {selectedComponent === "NLP" && <NLP />}
      {/* Core Services Dropdown */}
      {selectedCoreService === "AgenticAi" && <AgenticAi />}
      {selectedCoreService === "ApiIntegration" && <ApiIntegration />}
      {selectedCoreService === "CloudDeployment" && <CloudDeployment />}
      {selectedCoreService === "GenAiModelTuning" && <GenAiModelTuning />}
      {selectedCoreService === "Mcp" && <Mcp />}
      {selectedCoreService === "RagChatBot" && <RagChatBot />}
      {selectedCoreService === "UXDesign" && <UXDesign />}
      {/* Product Design Dropdown */}
      {selectedProductDesign === "Branding" && <Branding />}
      {selectedProductDesign === "DesignSystems" && <DesignSystems />}
      {selectedProductDesign === "ProductDesign" && <ProductDesignComp />}
      {selectedProductDesign === "UserExperience" && <UserExperience />}
      {selectedProductDesign === "UserInterface" && <UserInterface />}
      {selectedProductDesign === "UxWriting" && <UxWriting />}
    </div>
  );
}

export default Homepage;
