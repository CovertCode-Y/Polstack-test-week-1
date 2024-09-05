let militaryUnit = {

    name: "1st Infantry Division",
  
    location: "Fort Bragg, North Carolina, USA",
  
    establishmentDate: "1941-06-01",
  
    unitType: "Infantry Division",
  
    commandStructure: {
  
      commandingOfficer: {
  
        rank: "Major General",
  
        name: "John Doe",
  
        contact: {
  
          email: "john.doe@example.com",
  
          phone: "+1-555-123-4567",
  
        },
  
      },
  
      executiveOfficer: {
  
        rank: "Colonel",
  
        name: "Jane Smith",
  
        contact: {
  
          email: "jane.smith@example.com",
  
          phone: "+1-555-987-6543",
  
        },
  
      },
  
      chiefOfStaff: {
  
        rank: "Brigadier General",
  
        name: "Robert Brown",
  
        contact: {
  
          email: "robert.brown@example.com",
  
          phone: "+1-555-555-1234",
  
        },
  
      },
  
    },
  
    personnel: [
  
      {
  
        id: 1,
  
        name: "Private First Class Alice Johnson",
  
        rank: "Private First Class",
  
        role: "Rifleman",
  
        contact: {
  
          email: "alice.johnson@example.com",
  
          phone: "+1-555-000-1111",
  
        },
  
      },
  
      {
  
        id: 2,
  
        name: "Sergeant Michael White",
  
        rank: "Sergeant",
  
        role: "Squad Leader",
  
        contact: {
  
          email: "michael.white@example.com",
  
          phone: "+1-555-000-2222",
  
        },
  
      },
  
    ],
  
    equipment: {
  
      vehicles: [
  
        {
  
          type: "M1 Abrams Tank",
  
          quantity: 20,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Humvee",
  
          quantity: 50,
  
          status: "Operational",
  
        },
  
      ],
  
      firearms: [
  
        {
  
          type: "M16 Rifle",
  
          quantity: 500,
  
          status: "Operational",
  
        },
  
        {
  
          type: "M249 SAW",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
      otherEquipment: [
  
        {
  
          type: "Night Vision Goggles",
  
          quantity: 150,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Field Radios",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
    },
  
    missions: [
  
      {
  
        missionName: "Operation Desert Storm",
  
        startDate: "1991-01-17",
  
        endDate: "1991-02-28",
  
        description: "Combat operation to liberate Kuwait from Iraqi occupation.",
  
      },
  
      {
  
        missionName: "Operation Enduring Freedom",
  
        startDate: "2001-10-07",
  
        endDate: "2014-12-28",
  
        description:
  
          "Military operations aimed at dismantling al-Qaeda and removing the Taliban from power in Afghanistan.",
  
      },
  
    ],
  
    trainingPrograms: [
  
      {
  
        programName: "Basic Combat Training",
  
        duration: 10,
  
        focus:
  
          "Fundamentals of soldiering, physical conditioning, and basic combat skills.",
  
      },
  
      {
  
        programName: "Advanced Individual Training",
  
        duration: 12,
  
        focus:
  
          "Specialized training for specific military occupational specialties.",
  
      },
  
    ],
  
    history: [
  
      {
  
        eventDate: "1941-06-01",
  
        eventDescription: "Establishment of the 1st Infantry Division.",
  
      },
  
      {
  
        eventDate: "1944-06-06",
  
        eventDescription: "Participated in the D-Day landings in Normandy.",
  
      },
  
    ],
  
    currentDeployment: {
  
      location: "Middle East",
  
      mission: "Counter-terrorism operations",
  
      startDate: "2024-01-01",
  
      estimatedEndDate: "2024-12-31",
  
    },
    newDeployment:{
        location: " East",
  
        mission: "terrorism operations",
    
        startDate: "2024-01-01",
    
        estimatedEndDate: "2024-12-31",
    
  
    }
  };




  function Mission1(unit) {
const commanderUnit = unit.commandStructure.chiefOfStaff;
return `Rank: ${commanderUnit.rank},
 Name: ${commanderUnit.name}, 
 Phone: ${commanderUnit.contact.phone}`
  }

//   console.log(Mission1(militaryUnit));


function Mission2(unit) {
    const soldier = [];
    unit.personnel.forEach(personnel => {
      if (personnel.id) {
        soldier.push(personnel.id);
      }
    })
    return soldier.length;
}

// console.log(Mission2(militaryUnit));


function Mission3(unit, newDeployment) {
unit.history.push(unit.currentDeployment);
unit.currentDeployment = newDeployment;
return {
  newDeployment: unit.newDeployment
}
}



// console.log(Mission3(militaryUnit, militaryUnit.currentDeployment));


function Mission4(unit , newFirearm) {
    const existingFirearm = unit.equipment.firearms
    .find(firearm => firearm.type === newFirearm.type);
    if (existingFirearm) {
      existingFirearm.quantity += newFirearm.quantity;
      return `כלי נשק קיים: ${existingFirearm.type}, כמות: ${existingFirearm.quantity}`;
    } else {
      unit.equipment.firearms.push(newFirearm);
      return `כלי נשק חדש: ${newFirearm.type}, כמות: ${newFirearm.quantity}`;
    }
  }


  newFirearm =  {
    type: "M1 Abrams Tank",
    quantity: 20,
    status: "Operational",
  }

//   console.log(Mission4(militaryUnit, newFirearm));


function Mission5(unit) {
    let totalDuration = 0;
    unit.trainingPrograms.forEach(trainingPrograms => {
      totalDuration += trainingPrograms.duration;
    });
    return `משך כל ההכשרות בקורסים:  ${totalDuration}`;
  }


  console.log(Mission5(militaryUnit));
  
  


