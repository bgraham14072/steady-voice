// Crisis Communication Scenario Library for K-12 Superintendents
// Templates align with NSPRA crisis communication principles, FERPA/personnel
// confidentiality, and the panel notes principle: "AI can help draft the message,
// but the superintendent must own the message."
//
// Placeholders use [BRACKETS] so superintendents review and replace before sending.
// Channels: tv (on-camera statement), radio (audio-only), print (press release),
// community (family/staff/social/board).

window.SCENARIOS = [
  // ============ STUDENT SAFETY & WELLNESS ============
  {
    id: "student-death",
    category: "Student Safety & Wellness",
    title: "Death of a Student",
    severity: "high",
    summary: "A current student has died. Families and staff need information, support resources, and reassurance — without breaching family privacy or speculating about cause.",
    firstActions: [
      "Confirm facts with family/law enforcement before any communication",
      "Coordinate with family on what they consent to share",
      "Activate crisis response/counseling team and notify principals",
      "Notify staff before families when possible — staff will be asked questions",
      "Avoid cause of death unless family explicitly authorizes"
    ],
    toughQuestions: [
      "What was the cause of death?",
      "Was the school aware of any warning signs?",
      "Will counseling be provided? For how long?",
      "Was this connected to bullying or any school incident?",
      "Will there be a memorial at the school?"
    ],
    templates: {
      tv: `Good [morning/afternoon]. The [DISTRICT NAME] community is grieving the loss of one of our students. Out of respect for the family, we are not sharing additional personal details at this time. Our focus right now is on supporting students, staff, and families. Counselors and mental health support are available at every school today and in the coming days. We ask the community to keep this family in your thoughts and to give them the privacy they deserve. We will share additional information as it becomes appropriate. Thank you.`,

      radio: `This is [SUPERINTENDENT NAME], Superintendent of [DISTRICT NAME] Schools. Our district is mourning the loss of one of our students. We are focused on supporting our students, staff, and families during this difficult time. Counseling and mental health resources are available in every school. We ask everyone to keep this family in your thoughts and to respect their privacy. For updates and resources, visit [DISTRICT WEBSITE].`,

      print: `FOR IMMEDIATE RELEASE
[DATE]
Contact: [COMMUNICATIONS LEAD], [PHONE], [EMAIL]

[DISTRICT NAME] MOURNS THE LOSS OF A STUDENT

[CITY, STATE] — The [DISTRICT NAME] community is mourning the loss of a student at [SCHOOL NAME]. Out of respect for the family, the district will not share personal details at this time.

"Our hearts are with this family, and our focus is on caring for students, staff, and the entire school community," said Superintendent [NAME]. "Grief affects every member of a school family, and we are committed to providing the support our community needs."

The district has activated its crisis response team. Licensed school counselors, social workers, and mental health partners are available at [SCHOOL NAME] and across the district. Families who would like additional support may contact [PHONE/EMAIL].

The district asks the community and members of the media to respect the family's privacy during this time.

###`,

      community: {
        family: `Dear [DISTRICT NAME] Families,

It is with profound sadness that I share news of the loss of one of our students at [SCHOOL NAME]. Out of respect for the family, we are not sharing personal details at this time.

Grief touches all of us, and children process loss in different ways. Our crisis response team — counselors, social workers, and mental health partners — is at [SCHOOL NAME] today and will be available throughout the coming days. If your child is struggling, please do not hesitate to reach out to your school counselor or principal.

Some helpful guidance for talking with your child about loss can be found at [LINK TO RESOURCES].

If you or your family need additional support, please contact [PHONE/EMAIL]. We will continue to communicate as appropriate, while honoring the family's privacy.

We hold this family — and all of you — in our hearts.

[SUPERINTENDENT NAME]
Superintendent, [DISTRICT NAME]`,

        staff: `Colleagues,

I am writing to share difficult news. We have lost one of our students at [SCHOOL NAME]. Out of respect for the family, I am not sharing additional details at this time.

Please know that our crisis response team is being deployed to [SCHOOL NAME] beginning [TIME]. Counselors and mental health partners will be available for students AND for staff. Please take care of yourselves and lean on each other.

Talking points if students or families ask you questions:
• "We are deeply saddened. Out of respect for the family, the district is not sharing details."
• "Counselors are available today and in the coming days."
• "If you need support, please reach out to me or to [COUNSELOR NAME]."

A community letter will go out to families at [TIME]. Please do not share information on social media or with the press. Direct media inquiries to [COMMUNICATIONS LEAD].

Thank you for the care you bring to our students every day.

[SUPERINTENDENT NAME]`,

        social: `Our [DISTRICT NAME] community is mourning the loss of a student. Out of respect for the family, we are not sharing further details at this time. Counseling support is available at every school. Please keep this family in your hearts. — Superintendent [NAME]`,

        robocall: `Hello, this is Superintendent [NAME] with an important message from [DISTRICT NAME]. Our school community is mourning the loss of a student. Out of respect for the family, we are not sharing additional details at this time. Counselors and mental health support are available at [SCHOOL NAME] and across the district. A letter with more information has been sent to your email. Thank you, and please take care of one another.`,

        board: `Board Members,

Confidential briefing — please do not forward.

Earlier today, [DATE/TIME], we were notified of the death of a student at [SCHOOL NAME]. Out of respect for the family, we are not publicly sharing personal details. Our crisis response team has been activated and counseling support is in place.

A community letter has been sent and a brief media statement issued. We are coordinating with [LAW ENFORCEMENT/FAMILY] on any further communication. If you receive media inquiries, please direct them to [COMMUNICATIONS LEAD] and refrain from offering details.

Talking points if you are asked:
• "The district has my full support. The focus right now is on students, staff, and the family."

I will brief the full board at [NEXT MEETING/CALL].

[SUPERINTENDENT NAME]`
      }
    }
  },

  {
    id: "student-mental-health",
    category: "Student Safety & Wellness",
    title: "Student Mental Health Crisis or Suicide Concern",
    severity: "high",
    summary: "Reports of self-harm, a suicide attempt, or a death by suicide in the school community. Communication must follow safe-messaging guidelines (Reporting on Suicide, AFSP) to prevent contagion.",
    firstActions: [
      "Consult safe messaging guidelines (reportingonsuicide.org / AFSP) before drafting",
      "Do NOT describe method or location",
      "Coordinate with family — never confirm cause publicly without consent",
      "Deploy mental health resources before announcing",
      "Include crisis line (988) in every external message"
    ],
    toughQuestions: [
      "Was the student being bullied?",
      "Did the school know the student was struggling?",
      "What is the district doing differently going forward?",
      "Why didn't anyone intervene?"
    ],
    templates: {
      tv: `Our [DISTRICT NAME] community is experiencing a difficult time. The well-being of our students is our highest priority. Counselors, social workers, and mental health partners are available at every school. If your child or anyone you know is struggling, please reach out — to a counselor, to your principal, or to the 988 Suicide and Crisis Lifeline. You are not alone, and help is always available. We will continue to support our students, staff, and families.`,

      radio: `This is Superintendent [NAME] of [DISTRICT NAME]. Our community is going through a hard time, and the well-being of our students is what matters most. Counseling support is available in every school. If you or someone you love is struggling, please reach out — call or text 988, the Suicide and Crisis Lifeline. Help is always available.`,

      print: `FOR IMMEDIATE RELEASE
[DATE]
Contact: [COMMUNICATIONS LEAD], [PHONE], [EMAIL]

[DISTRICT NAME] EXPANDS MENTAL HEALTH SUPPORT FOR STUDENTS AND FAMILIES

[CITY, STATE] — [DISTRICT NAME] is providing expanded mental health support for students, staff, and families. Out of respect for privacy and in line with safe messaging guidelines, the district will not share details about specific individuals.

"The well-being of our students is our highest priority," said Superintendent [NAME]. "Mental health is health, and we want every family to know that support is available."

Resources available now:
• School-based counselors and social workers at every building
• [COMMUNITY MENTAL HEALTH PARTNER] on-site support
• 988 Suicide and Crisis Lifeline (call or text 988)
• [DISTRICT FAMILY RESOURCE LINE]

Families who want guidance on how to talk with their child can visit [LINK].

###`,

      community: {
        family: `Dear [DISTRICT NAME] Families,

I am writing to share that our school community is going through a difficult time. Out of respect for the privacy of those involved, and in keeping with safe messaging guidelines, I will not share specific details.

What I can tell you is this: the well-being of every student is our highest priority. Counselors and mental health partners are available in every school. If your child is struggling — or if you are — please reach out.

Resources:
• Your school counselor or principal
• 988 Suicide and Crisis Lifeline (call or text 988)
• Crisis Text Line — text HOME to 741741
• [DISTRICT FAMILY RESOURCE LINE]

Talking with your child can help. Guidance is available at [LINK]. Please do not hesitate to contact us.

You are not alone, and neither is your child.

[SUPERINTENDENT NAME]`,

        staff: `Colleagues,

We are navigating a hard moment. Please prioritize student well-being today, and your own. Counselors and our mental health partners are available for students and for staff.

Important reminders:
• Follow safe messaging — do not discuss method or location
• Do not speculate about cause
• Refer concerned students to a counselor immediately
• If a student discloses thoughts of self-harm, follow the threat assessment protocol and notify [DESIGNATED ADMIN] right away

Take care of each other.

[SUPERINTENDENT NAME]`,

        social: `Mental health is health. If you or your child is struggling, please reach out — to a counselor, your principal, or the 988 Suicide and Crisis Lifeline (call or text 988). Support is available at every [DISTRICT NAME] school.`,

        robocall: `This is Superintendent [NAME] from [DISTRICT NAME]. Our community is going through a difficult time. Counseling and mental health support are available at every school. If you or your child needs support, please reach out, or call or text 988 — the Suicide and Crisis Lifeline. A letter with more resources has been sent to your email.`,

        board: `Board Members,

Confidential briefing.

[BRIEF FACTUAL SUMMARY — what is known, what is being done]. Out of respect for privacy and following safe messaging guidance, public communication is intentionally limited to support and resources rather than details.

Mental health staffing has been increased at [SCHOOL(S)]. We are coordinating with [COMMUNITY PARTNER] for additional capacity.

If asked: "The superintendent and team have my full support. Our focus is the well-being of every student." Please do not speculate or share details. Direct media to [COMMUNICATIONS LEAD].

[SUPERINTENDENT NAME]`
      }
    }
  },

  {
    id: "threat-on-social-media",
    category: "Student Safety & Wellness",
    title: "Threat Posted on Social Media",
    severity: "high",
    summary: "A vague or specific threat has been posted on social media targeting a school. Parents are calling. Decision needed on whether to close, hold, or proceed normally.",
    firstActions: [
      "Coordinate with law enforcement IMMEDIATELY — do not communicate first",
      "Activate threat assessment team",
      "Decide: close, modified day, or normal day with increased security",
      "Communicate proactively — silence creates rumors",
      "Do NOT share screenshot or details that re-amplify the threat"
    ],
    toughQuestions: [
      "Why is school open today if there is a threat?",
      "Why was school closed if it was 'not credible'?",
      "Have you arrested anyone?",
      "How did the threat get on social media?",
      "Will there be more police at school?"
    ],
    templates: {
      tv: `[DISTRICT NAME] became aware [TIME] of a [GENERAL DESCRIPTION — e.g., social media post] referencing [SCHOOL NAME]. We immediately contacted [LAW ENFORCEMENT AGENCY], who is investigating. After consultation with law enforcement, we have determined that [SCHOOL WILL OPEN AS NORMAL / SCHOOL WILL BE CLOSED / WE WILL HAVE INCREASED POLICE PRESENCE]. The safety of our students and staff is our highest priority. We thank [POLICE DEPT] for their swift partnership and we ask families to continue communicating any concerns to school officials or law enforcement.`,

      radio: `Superintendent [NAME] here from [DISTRICT NAME]. We were made aware of a threat referencing [SCHOOL NAME] and immediately partnered with [LAW ENFORCEMENT]. After their assessment, we have determined that [DECISION]. Student and staff safety is our highest priority. If you see something, say something — call [TIP LINE OR 911].`,

      print: `FOR IMMEDIATE RELEASE
[DATE/TIME]
Contact: [COMMUNICATIONS LEAD], [PHONE], [EMAIL]

[DISTRICT NAME] RESPONDS TO THREAT REFERENCING [SCHOOL NAME]

[CITY, STATE] — At approximately [TIME] on [DATE], [DISTRICT NAME] administrators became aware of a [DESCRIPTION] referencing [SCHOOL NAME]. The district immediately contacted [LAW ENFORCEMENT AGENCY], which initiated an investigation.

In coordination with law enforcement, the district has [DECISION — held normal classes / dismissed early / closed for the day / increased security presence].

"Student and staff safety is our highest priority," said Superintendent [NAME]. "We are grateful to [LAW ENFORCEMENT] for their immediate partnership. We will always err on the side of caution while sharing what we know as soon as we can."

Families with information should contact [LAW ENFORCEMENT TIP LINE] or 911.

###`,

      community: {
        family: `Dear [SCHOOL NAME] Families,

I am writing to inform you that earlier [today/this morning], we became aware of a [post / message / threat] on social media referencing [SCHOOL NAME]. We immediately contacted [LAW ENFORCEMENT AGENCY], who launched an investigation.

After consulting with law enforcement, we have made the following decision:
[OPTION A: Classes will continue as scheduled. Law enforcement does not believe there is a credible threat. You will see additional police presence at the school today out of an abundance of caution.]
[OPTION B: Out of an abundance of caution, [SCHOOL NAME] will be closed [TIMEFRAME]. All activities are cancelled.]
[OPTION C: We will dismiss [SCHOOL NAME] at [TIME].]

Please remind your child that if they see or hear something concerning, they should tell a trusted adult immediately. Anonymous tips can be made to [TIP LINE].

I want to be transparent: we are sharing what we can share. Some details cannot be shared because they are part of an active investigation. We will update you as we are able.

Thank you for trusting us with your children.

[SUPERINTENDENT NAME]`,

        staff: `Team,

Earlier [today/this morning], we received notice of a threat on social media referencing [SCHOOL NAME]. Law enforcement is investigating.

The decision is: [DECISION].

Important:
• Do not share screenshots of the threat
• Do not speculate with students or families
• Refer concerned students to a counselor; refer urgent concerns to administration immediately
• Direct media to [COMMUNICATIONS LEAD]

A family letter is going out at [TIME]. Talking points are attached.

Thank you for your professionalism and your care for our students.

[SUPERINTENDENT NAME]`,

        social: `[DISTRICT NAME] is aware of a social media post referencing [SCHOOL NAME]. We are working with [LAW ENFORCEMENT] who is investigating. Decision: [DECISION]. Student safety is our top priority. A letter has been sent to families.`,

        robocall: `This is Superintendent [NAME] with an urgent message from [DISTRICT NAME]. We became aware of a threat referencing [SCHOOL NAME] and immediately contacted law enforcement. After consultation, we have decided: [DECISION]. A detailed letter has been sent to your email. Student safety is our top priority. If you have information, please call [TIP LINE] or 911.`,

        board: `Board,

Confidential — active investigation.

At [TIME], we became aware of [DESCRIPTION]. [LAW ENFORCEMENT] is investigating. Decision made in consultation with [LAW ENFORCEMENT]: [DECISION].

Family letter has gone out. Media statement issued. If you receive inquiries, please say: "I have full confidence in the superintendent and the law enforcement partnership. Please direct questions to [COMMUNICATIONS LEAD]."

Do not share details from this briefing — investigation is active.

[SUPERINTENDENT NAME]`
      }
    }
  },

  {
    id: "weapon-on-campus",
    category: "Student Safety & Wellness",
    title: "Weapon Found on Campus",
    severity: "high",
    summary: "A weapon (knife, firearm, or other) has been found on campus or in a student's possession. The situation has been resolved without injury, but the community needs accurate information quickly.",
    firstActions: [
      "Confirm what was found and where — exact wording matters",
      "Coordinate with law enforcement on language",
      "Communicate before parents hear it from a child or social media",
      "Avoid identifying the student involved (FERPA)",
      "Be specific about steps taken and outcome"
    ],
    toughQuestions: [
      "How did the weapon get into the school?",
      "Will the student be charged?",
      "Why didn't metal detectors catch it?",
      "Will you install metal detectors now?",
      "Was anyone hurt?"
    ],
    templates: {
      tv: `Earlier today at [SCHOOL NAME], a [TYPE OF ITEM — knife / firearm] was discovered in the possession of a student. The situation was resolved without injury. School and law enforcement responded immediately and the student is being addressed under the district code of conduct and applicable law. Student privacy and an active investigation prevent me from sharing more, but I can tell you that no one was injured, and we are reviewing every step of how this was identified and addressed. I am grateful to the staff and law enforcement who responded quickly.`,

      radio: `Today at [SCHOOL NAME], a [TYPE] was discovered in the possession of a student. The situation was resolved without injury. School staff and [LAW ENFORCEMENT] responded immediately. Student privacy laws and an active investigation prevent additional details. Safety remains our top priority.`,

      print: `FOR IMMEDIATE RELEASE
[DATE]
Contact: [COMMUNICATIONS LEAD], [PHONE], [EMAIL]

[DISTRICT NAME] RESPONDS TO INCIDENT AT [SCHOOL NAME]

[CITY, STATE] — At approximately [TIME] today, a [TYPE OF WEAPON] was discovered in the possession of a student at [SCHOOL NAME]. The situation was resolved without injury. School staff identified the item and immediately contacted [LAW ENFORCEMENT AGENCY], which responded to the school.

The student involved is being addressed under the district code of conduct and applicable state law. Due to student privacy and an active investigation, the district will not share further details.

"I am grateful to our staff and to [LAW ENFORCEMENT] for the speed and professionalism of today's response," said Superintendent [NAME]. "We will continue to review every step of how we identify and respond to safety concerns. Our students' safety remains our highest priority."

Families with information should contact [LAW ENFORCEMENT TIP LINE] or [DISTRICT TIP LINE].

###`,

      community: {
        family: `Dear [SCHOOL NAME] Families,

I want to share what happened today at [SCHOOL NAME] before you hear it from another source.

At approximately [TIME], a [TYPE OF ITEM] was discovered in the possession of a student. The situation was resolved without injury. Staff identified the item and contacted [LAW ENFORCEMENT], who responded to the school.

The student involved is being addressed under the district code of conduct and applicable law. Because of student privacy and the ongoing investigation, I cannot share additional details about the student.

I want you to know:
• No one was injured.
• Staff and law enforcement responded quickly.
• We will review every step to learn from this.

If your child needs support to process today, our counselors are available. If your child has information about safety concerns, please encourage them to share it with a trusted adult or use [TIP LINE].

Thank you for trusting us with your children. We do not take that trust for granted.

[SUPERINTENDENT NAME]`,

        staff: `Colleagues,

Earlier today, a [TYPE] was discovered in the possession of a student at [SCHOOL NAME]. No one was injured. Law enforcement responded.

What you can say if asked:
• "The situation was resolved without injury."
• "Out of respect for student privacy and the ongoing investigation, I can't share details."
• "If your child needs support, please reach out to your counselor."

Please refer media to [COMMUNICATIONS LEAD]. Counselors are available for any student or staff who needs support.

Thank you for everything you did today.

[SUPERINTENDENT NAME]`,

        social: `Earlier today at [SCHOOL NAME], a [TYPE] was discovered in the possession of a student. The situation was resolved without injury. Law enforcement responded. Student privacy and the ongoing investigation prevent further details. A letter has been sent to families.`,

        robocall: `This is Superintendent [NAME] from [DISTRICT NAME]. Earlier today at [SCHOOL NAME], a [TYPE] was found in the possession of a student. The situation was resolved without injury, and law enforcement responded immediately. A detailed letter has been sent to your email. Counseling is available for any student who needs support.`,

        board: `Board,

Confidential briefing.

At [TIME], a [TYPE] was discovered with a student at [SCHOOL NAME]. No injuries. [LAW ENFORCEMENT] responded. Student is being addressed under code of conduct and applicable law.

Family communication has gone out. We will conduct an after-action review and report at the next meeting.

If asked: "I have full confidence in the response. Out of respect for student privacy, I cannot share details." Please direct media to [COMMUNICATIONS LEAD].

[SUPERINTENDENT NAME]`
      }
    }
  },

  // ============ PERSONNEL ============
  {
    id: "staff-arrest",
    category: "Personnel",
    title: "Staff Member Arrested or Charged",
    severity: "high",
    summary: "An employee has been arrested or charged with a crime. Even if unrelated to school, the public will demand information. Personnel and legal limits constrain what you can say.",
    firstActions: [
      "Consult with district counsel BEFORE any communication",
      "Confirm employment status (active, suspended, leave) — be precise",
      "Coordinate with law enforcement on what they have publicly released",
      "Do not characterize, speculate, or pre-judge",
      "Address: was there contact with students, when did the district learn"
    ],
    toughQuestions: [
      "When did the district first learn of this?",
      "Why is the employee still on payroll?",
      "Were there prior complaints?",
      "Did this person have unsupervised access to students?",
      "Will you fire them?"
    ],
    templates: {
      tv: `[DISTRICT NAME] is aware that [EMPLOYEE TITLE/ROLE] has been [arrested / charged] by [LAW ENFORCEMENT]. Upon learning of this, the district [TOOK ACTION — placed the employee on leave / removed them from contact with students]. We are cooperating fully with [LAW ENFORCEMENT]. Out of respect for due process and personnel confidentiality, I am limited in what I can say. What I can tell you is that student safety is our highest priority, and we will follow this matter to its conclusion under the law and our district policies.`,

      radio: `Superintendent [NAME] of [DISTRICT NAME]. We are aware of the [arrest / charges] involving a district employee. Upon learning, we placed the employee on [STATUS] and are cooperating fully with law enforcement. Personnel confidentiality and due process limit what I can say. Student safety is our highest priority.`,

      print: `FOR IMMEDIATE RELEASE
[DATE]
Contact: [COMMUNICATIONS LEAD], [PHONE], [EMAIL]

STATEMENT FROM [DISTRICT NAME] REGARDING EMPLOYEE MATTER

[CITY, STATE] — [DISTRICT NAME] is aware that a district employee has been [arrested / charged] by [LAW ENFORCEMENT AGENCY]. Upon learning of the [arrest / charges], the district [placed the employee on leave / removed the employee from contact with students / terminated employment, as permitted by law].

The district is cooperating fully with law enforcement. Out of respect for due process, personnel confidentiality, and the integrity of the investigation, the district will not provide additional details.

"Student safety is our highest priority," said Superintendent [NAME]. "We will continue to follow this matter to its conclusion under the law and our district policies."

Families with information relevant to the investigation are encouraged to contact [LAW ENFORCEMENT].

###`,

      community: {
        family: `Dear [DISTRICT NAME] Families,

I am writing to share that the district has been informed of the [arrest / charges] of [EMPLOYEE TITLE — e.g., a staff member at SCHOOL NAME]. Upon learning of this matter, the district [ACTION — placed the employee on leave / removed them from any contact with students].

I know news like this is unsettling. I want to be as transparent as I am permitted to be:
• The district is cooperating fully with [LAW ENFORCEMENT].
• Out of respect for due process and personnel confidentiality, I cannot share further details.
• Student safety is our highest priority.

If your child has information related to this matter, please contact [LAW ENFORCEMENT CONTACT]. If your child needs support, our counselors are available.

I will share additional information when I am legally and ethically able to do so.

[SUPERINTENDENT NAME]`,

        staff: `Colleagues,

You may have seen reports about the [arrest / charges] of [EMPLOYEE TITLE]. The employee has been [STATUS] effective [DATE].

Please do not speculate or share information internally or externally. Direct all media to [COMMUNICATIONS LEAD]. If a parent or community member asks, please say: "I'm not able to comment on personnel matters. The district has issued a statement."

Counselors are available if you or any student needs support.

Thank you for your professionalism.

[SUPERINTENDENT NAME]`,

        social: `[DISTRICT NAME] is aware of the [arrest / charges] involving a district employee. Upon learning, the district took immediate action and is cooperating fully with law enforcement. Due process and personnel confidentiality limit further comment. A letter has been sent to families.`,

        robocall: `This is Superintendent [NAME] from [DISTRICT NAME]. I want to inform you of an employee personnel matter. Upon learning of the [arrest / charges] of an employee, the district took immediate action and is cooperating with law enforcement. A letter with more information has been sent to your email. Counseling is available for any student who needs support.`,

        board: `Board Members,

Privileged and confidential — coordinate with counsel before forwarding.

At [DATE/TIME], the district learned of the [arrest / charges] of [EMPLOYEE]. Action taken: [STATUS — leave with/without pay; non-contact with students]. Counsel has been consulted. We are cooperating with [LAW ENFORCEMENT].

If contacted by media or community: "I have confidence in the superintendent and the process. I cannot comment on personnel matters." Direct inquiries to [COMMUNICATIONS LEAD].

I will brief you in executive session.

[SUPERINTENDENT NAME]`
      }
    }
  },

  {
    id: "beloved-staff-death",
    category: "Personnel",
    title: "Death of a Beloved Staff Member",
    severity: "medium",
    summary: "A long-tenured or beloved staff member has died. Community needs space to grieve while respecting the family's wishes.",
    firstActions: [
      "Coordinate with family before any public communication",
      "Notify staff before families/students when possible",
      "Activate counseling/EAP support",
      "Ask family what they would like shared (cause, service info)"
    ],
    toughQuestions: [
      "How did they die?",
      "Will there be a memorial at the school?",
      "Who will replace them?",
      "How are students coping?"
    ],
    templates: {
      tv: `Today the [DISTRICT NAME] family is mourning the loss of [NAME], who served our students as [ROLE] for [YEARS] years. [HE/SHE/THEY] touched countless lives. Out of respect for the family, we are sharing what they have asked us to share. Counselors are with our students and staff today. We will hold this family — and our school family — in our hearts.`,

      radio: `[DISTRICT NAME] is mourning the loss of [NAME], a beloved [ROLE] who served our students for [YEARS] years. Counselors are supporting students and staff today. Our hearts are with [HIS/HER/THEIR] family.`,

      print: `FOR IMMEDIATE RELEASE
[DATE]
Contact: [COMMUNICATIONS LEAD], [PHONE], [EMAIL]

[DISTRICT NAME] MOURNS THE LOSS OF [NAME]

[CITY, STATE] — The [DISTRICT NAME] community is mourning the loss of [NAME], who served as [ROLE] at [SCHOOL] for [YEARS] years. [NAME] touched the lives of generations of students and was known for [BRIEF QUALITY — kindness, dedication, humor, mentorship].

"We have lost a member of our family," said Superintendent [NAME]. "[FIRST NAME]'s impact will be felt for years to come."

Counseling and support are available for students and staff. [SERVICE INFORMATION, IF SHARED BY FAMILY].

###`,

      community: {
        family: `Dear [DISTRICT NAME] Families,

It is with deep sadness that I share that [NAME], our [ROLE] at [SCHOOL] for [YEARS] years, has passed away. [HE/SHE/THEY] dedicated [HIS/HER/THEIR] career to our students and will be missed dearly.

Counselors are at [SCHOOL] today and will be available throughout the week. If your child knew [FIRST NAME] and is grieving, please don't hesitate to reach out.

[SERVICE / MEMORIAL INFORMATION, IF SHARED BY FAMILY].

Please keep [HIS/HER/THEIR] family in your hearts.

[SUPERINTENDENT NAME]`,

        staff: `Colleagues,

It is with profound sadness that I share that our friend and colleague [NAME] has passed away. [HE/SHE/THEY] gave [YEARS] years to our students. We are heartbroken.

Counseling and our EAP are available. Please take care of yourselves and each other.

[SERVICE INFO IF SHARED]. We will gather to honor [FIRST NAME] at [TIME/PLACE].

With love,
[SUPERINTENDENT NAME]`,

        social: `Today we mourn the loss of [NAME], a beloved [ROLE] at [SCHOOL] for [YEARS] years. [HE/SHE/THEY] shaped countless young lives. Our hearts are with [HIS/HER/THEIR] family.`,

        robocall: `This is Superintendent [NAME]. With heavy hearts, I share that our beloved [ROLE] [NAME] has passed away. Counselors are available for students and staff. A letter has been sent to your email. Please keep [HIS/HER/THEIR] family in your thoughts.`,

        board: `Board,

I am sharing the heartbreaking news that [NAME], [ROLE] at [SCHOOL], has passed away. We are coordinating with the family on communications and supports. Counseling is in place. [SERVICE INFO]. I will keep you posted.

[SUPERINTENDENT NAME]`
      }
    }
  },

  {
    id: "leadership-resignation",
    category: "Personnel",
    title: "Sudden Leadership Resignation or Departure",
    severity: "medium",
    summary: "A principal, central office leader, or other high-profile employee has resigned suddenly. Community will speculate. Decision needed on what to share.",
    firstActions: [
      "Coordinate with the departing employee on language",
      "Decide: voluntary departure language only, or fuller context if appropriate",
      "Announce internally before externally",
      "Name an interim leader at the same time as the announcement"
    ],
    toughQuestions: [
      "Were they fired?",
      "Why are they leaving?",
      "Was this related to [recent issue]?",
      "Who is in charge now?"
    ],
    templates: {
      tv: `[DISTRICT NAME] is announcing that [NAME] is concluding their role as [TITLE] effective [DATE]. We thank [HIM/HER/THEM] for [YEARS] years of service. [INTERIM LEADER] will serve as Interim [TITLE] beginning [DATE]. We will conduct a thorough search for the permanent role and look forward to welcoming a new leader for our [SCHOOL/DEPARTMENT] community.`,

      radio: `[DISTRICT NAME] is announcing that [NAME] is concluding their role as [TITLE] effective [DATE]. [INTERIM] will serve as Interim [TITLE]. A search will begin shortly.`,

      print: `FOR IMMEDIATE RELEASE
[DATE]
Contact: [COMMUNICATIONS LEAD], [PHONE], [EMAIL]

[DISTRICT NAME] ANNOUNCES LEADERSHIP TRANSITION AT [SCHOOL/DEPARTMENT]

[CITY, STATE] — [DISTRICT NAME] today announced that [NAME] is concluding [HIS/HER/THEIR] role as [TITLE], effective [DATE]. [INTERIM NAME], [INTERIM CURRENT ROLE], will serve as Interim [TITLE] beginning [DATE].

"[NAME] has contributed [SUMMARY OF CONTRIBUTIONS]. We thank [HIM/HER/THEM] for [HIS/HER/THEIR] service," said Superintendent [NAME]. "[INTERIM] brings [STRENGTHS] and will provide stability and leadership during this transition."

A search for the permanent [TITLE] will begin [TIMELINE].

###`,

      community: {
        family: `Dear [SCHOOL/DEPARTMENT] Families,

I am writing to inform you that [NAME] is concluding [HIS/HER/THEIR] role as [TITLE] effective [DATE]. We thank [HIM/HER/THEM] for [HIS/HER/THEIR] [YEARS] of service to our community.

[INTERIM NAME] will serve as Interim [TITLE] beginning [DATE]. [BRIEF BIO — current role, why they are well-suited]. A search for the permanent [TITLE] will begin [TIMELINE], and families will have the opportunity to provide input.

I am committed to a smooth transition. Please continue to direct school questions to [SCHOOL OFFICE / EMAIL].

[SUPERINTENDENT NAME]`,

        staff: `Team,

[NAME] is concluding [HIS/HER/THEIR] role as [TITLE] effective [DATE]. [INTERIM] will step in beginning [DATE].

I will communicate with [SCHOOL/DEPARTMENT] families today. Please direct any media to [COMMUNICATIONS LEAD]. Refrain from speculation — please.

A community letter will go out at [TIME]. Talking points are attached.

[SUPERINTENDENT NAME]`,

        social: `[DISTRICT NAME] announces that [NAME] is concluding [HIS/HER/THEIR] role as [TITLE]. We thank [HIM/HER/THEM] for [YEARS] of service. [INTERIM] will serve as Interim [TITLE].`,

        robocall: `This is Superintendent [NAME]. I'm reaching out to let you know that [NAME] is concluding [HIS/HER/THEIR] role as [TITLE] effective [DATE]. [INTERIM] will serve as Interim [TITLE]. A letter with more details has been sent to your email.`,

        board: `Board,

Confidential.

[NAME] will conclude as [TITLE] on [DATE]. [INTERIM] will be Interim [TITLE]. [BRIEF CONTEXT — what is shareable]. Search timeline: [DATES].

If asked: "I have full confidence in the superintendent's plan. We are grateful for [NAME]'s service and welcome [INTERIM]'s leadership." Please direct media to [COMMUNICATIONS LEAD].

[SUPERINTENDENT NAME]`
      }
    }
  },

  // ============ OPERATIONAL ============
  {
    id: "bus-accident",
    category: "Operational",
    title: "School Bus Accident",
    severity: "high",
    summary: "A school bus has been in an accident. Parents are calling. Information is incomplete. Speed and accuracy must coexist.",
    firstActions: [
      "Confirm: bus number, route, school, time, location, injuries",
      "Communicate with parents of children on the bus FIRST",
      "Coordinate with law enforcement before public details",
      "Set up reunification location if needed",
      "Issue holding statement within 30 minutes — even if details are limited"
    ],
    toughQuestions: [
      "How many were injured?",
      "Was the driver at fault?",
      "Were the buses inspected?",
      "Will buses run tomorrow?",
      "Where can parents go to find their child?"
    ],
    templates: {
      tv: `At approximately [TIME], a [DISTRICT NAME] school bus on Route [#] from [SCHOOL] was involved in an accident at [LOCATION]. [LAW ENFORCEMENT/EMS] responded immediately. [STATUS — Students have been transported to / are being reunified at / no serious injuries reported]. Parents of children on Route [#] are being contacted directly. The reunification location is [LOCATION]. We are grateful to our first responders. We will share additional information as we are able.`,

      radio: `Important update from [DISTRICT NAME]. A school bus on Route [#] was involved in an accident this [morning/afternoon] at [LOCATION]. First responders are on scene. Parents of children on Route [#] are being contacted. Reunification location: [LOCATION]. More information will be shared as it becomes available.`,

      print: `FOR IMMEDIATE RELEASE
[DATE/TIME]
Contact: [COMMUNICATIONS LEAD], [PHONE], [EMAIL]

[DISTRICT NAME] BUS INVOLVED IN ACCIDENT — UPDATE

[CITY, STATE] — At approximately [TIME] today, [DATE], a [DISTRICT NAME] school bus traveling Route [#] from [SCHOOL] was involved in an accident at [LOCATION]. [LAW ENFORCEMENT AGENCY] and [EMS] responded.

Status as of [TIME]: [DETAILS — number of students on bus, injury status (per law enforcement), reunification location].

"Our hearts are with the students, families, and staff affected," said Superintendent [NAME]. "We are grateful to our first responders for their immediate action."

Parents of students on Route [#] are being contacted directly. Reunification is taking place at [LOCATION]. Updates will be posted at [DISTRICT WEBSITE].

###`,

      community: {
        family: `URGENT — Bus Route [#] Update

Dear [DISTRICT NAME] Families,

At approximately [TIME] today, the [DISTRICT NAME] school bus serving Route [#] from [SCHOOL] was involved in an accident at [LOCATION]. First responders arrived immediately.

Status:
• [Students on bus: # / Injuries reported: # / EMS response: details]
• Reunification location: [LOCATION]
• If your child is on Route [#], please go to [LOCATION] with photo ID

We are calling parents of children on Route [#] directly. If you have not received a call and your child is on this route, please contact [PHONE].

Counselors will be available at [SCHOOL]. We will continue to update you.

[SUPERINTENDENT NAME]`,

        staff: `Team,

Bus Route [#] from [SCHOOL] was involved in an accident at [TIME] at [LOCATION]. First responders are on scene. Reunification at [LOCATION].

Please:
• Refer media to [COMMUNICATIONS LEAD]
• Counselors deploy to [LOCATION] and [SCHOOL]
• Office staff at [SCHOOL] — answer parent calls with the script attached

I will update you as more information is available.

[SUPERINTENDENT NAME]`,

        social: `URGENT: A [DISTRICT NAME] bus on Route [#] was in an accident at [TIME] near [LOCATION]. First responders on scene. Parents of students on Route [#] should go to [LOCATION] for reunification. Updates: [DISTRICT WEBSITE].`,

        robocall: `This is an urgent message from Superintendent [NAME]. A [DISTRICT NAME] bus on Route [#] from [SCHOOL] was involved in an accident at [TIME]. First responders are on scene. If your child is on Route [#], please go to [LOCATION] with photo ID for reunification. We will continue to update by phone and email.`,

        board: `Board,

Urgent. Bus Route [#] accident at [TIME], [LOCATION]. First responders on scene. Reunification underway at [LOCATION]. [STATUS OF INJURIES per law enforcement].

Family communication is going out. Media will be referred to [COMMUNICATIONS LEAD]. If contacted: "I have full confidence in the response. Please refer questions to the district communications office."

I will brief you as soon as more is known.

[SUPERINTENDENT NAME]`
      }
    }
  },

  {
    id: "emergency-closure",
    category: "Operational",
    title: "Emergency Closure (Weather, Power, Water)",
    severity: "medium",
    summary: "School must close mid-day or for the next day due to weather, infrastructure failure, or environmental concern. Parents need actionable, fast information.",
    firstActions: [
      "Decide and announce as early as possible — speed beats polish",
      "Coordinate with transportation, food service, after-school programs",
      "Make sure cancellation cascades to all platforms",
      "Address childcare reality — many parents need lead time",
      "Communicate plan for instructional continuity if more than one day"
    ],
    toughQuestions: [
      "Why didn't you decide sooner?",
      "Will we make up the day?",
      "What about my child's [practice/event]?",
      "Are you serving meals?"
    ],
    templates: {
      tv: `[DISTRICT NAME] schools will be [closed / dismissed early at TIME / on a delayed open] [TODAY / TOMORROW, DATE] due to [REASON]. All [activities / athletics / after-school programs] are [cancelled / postponed]. [MEALS — pickup at SITE from TIME]. Updates at [DISTRICT WEBSITE].`,

      radio: `[DISTRICT NAME] schools will be [closed / dismissed at TIME / delayed by HOURS] [TODAY / TOMORROW] due to [REASON]. All activities cancelled. Meals available at [SITE] from [TIME]. More at [DISTRICT WEBSITE].`,

      print: `FOR IMMEDIATE RELEASE
[DATE]
Contact: [COMMUNICATIONS LEAD], [PHONE], [EMAIL]

[DISTRICT NAME] ANNOUNCES [CLOSURE / EARLY DISMISSAL / DELAYED OPEN] FOR [DATE]

[CITY, STATE] — Due to [REASON], all [DISTRICT NAME] schools will be [closed / dismissed at TIME / on a HOURS-hour delay] on [DATE]. All co-curricular activities, athletic events, and community use of buildings are [cancelled / postponed].

Meal service: [DETAILS — grab-and-go available at SITES, TIMES].
Instructional continuity: [DETAILS — remote learning / no instruction / makeup day].
After-school programs: [DETAILS].

Updates will be posted at [DISTRICT WEBSITE] and across district social media.

###`,

      community: {
        family: `Dear [DISTRICT NAME] Families,

Due to [REASON], all [DISTRICT NAME] schools will be [closed / dismissed at TIME / on a HOURS-hour delay] [TODAY / TOMORROW, DATE].

What this means:
• [School schedule details]
• All activities, athletics, and community use: [cancelled / rescheduled to DATE]
• After-school programs: [DETAILS]
• Meals: [Grab-and-go available at SITES, TIMES]
• Instructional continuity: [DETAILS]

I know this creates challenges for many families. Thank you for your flexibility. Please check [DISTRICT WEBSITE] for updates.

[SUPERINTENDENT NAME]`,

        staff: `Team,

Due to [REASON], schools are [STATUS] [DATE]. [STAFF EXPECTATIONS — work from home / report at TIME / closed].

Activities cancelled. Meal service plan attached. Reach out with questions.

[SUPERINTENDENT NAME]`,

        social: `[DISTRICT NAME] schools are [closed / dismissed early at TIME / on a HOURS-hour delay] [DATE] due to [REASON]. Activities cancelled. Meals at [SITE] from [TIME]. Updates: [DISTRICT WEBSITE].`,

        robocall: `This is Superintendent [NAME]. Due to [REASON], all [DISTRICT NAME] schools will be [STATUS] [DATE]. All activities are cancelled. Meals will be available at [SITE] from [TIME]. Please check your email for full details.`,

        board: `Board,

Schools are [STATUS] for [DATE] due to [REASON]. Decision rationale: [BRIEF — safety, infrastructure, etc.]. Activity cancellations and meal plan in place. Communication has gone out across all channels.

[SUPERINTENDENT NAME]`
      }
    }
  },

  // ============ SECURITY ============
  {
    id: "lockdown",
    category: "Security",
    title: "Active Lockdown or Hold-in-Place",
    severity: "high",
    summary: "A school is in lockdown or hold-in-place. Parents are panicking. Speed matters more than polish, and what you say must match what law enforcement is saying.",
    firstActions: [
      "Coordinate with law enforcement BEFORE public communication",
      "Push first message within 15 minutes — 'we are aware, students are safe, do not come to school'",
      "Repeat: do not call your child / do not come to the school",
      "Prepare reunification protocol",
      "Plan post-event communication: what happened, what's next"
    ],
    toughQuestions: [
      "Is my child safe?",
      "Should I come pick them up?",
      "Was there a shooter?",
      "Why didn't you tell us sooner?",
      "When will school resume?"
    ],
    templates: {
      tv: `At approximately [TIME], [SCHOOL NAME] entered [a lockdown / a hold-in-place] in coordination with [LAW ENFORCEMENT]. Students and staff are following established safety procedures. Law enforcement is on scene. We are asking parents NOT to come to the school and NOT to call students directly while the situation is being managed. We will share information as it becomes safe and accurate to share. Please go to [DISTRICT WEBSITE] for updates.`,

      radio: `Urgent. [SCHOOL NAME] is currently on [lockdown / hold-in-place] in coordination with [LAW ENFORCEMENT]. Parents — do not come to the school. Do not call your child. Updates at [DISTRICT WEBSITE].`,

      print: `FOR IMMEDIATE RELEASE
[DATE/TIME]
Contact: [COMMUNICATIONS LEAD], [PHONE], [EMAIL]

[SCHOOL NAME] ON [LOCKDOWN / HOLD-IN-PLACE]

[CITY, STATE] — At approximately [TIME], [SCHOOL NAME] entered [a lockdown / a hold-in-place] in coordination with [LAW ENFORCEMENT AGENCY]. Students and staff are following established safety procedures.

Parents are asked NOT to come to the school and NOT to call students directly. Doing so can interfere with safety procedures and law enforcement operations.

The district will share additional information as soon as it is safe and accurate to do so. Updates will be posted at [DISTRICT WEBSITE].

###`,

      community: {
        family: `URGENT — [SCHOOL NAME] [LOCKDOWN / HOLD-IN-PLACE]

At [TIME], [SCHOOL NAME] entered [a lockdown / a hold-in-place] in coordination with [LAW ENFORCEMENT].

What we are asking of you RIGHT NOW:
• Do NOT come to the school
• Do NOT call your child's phone
• Stay tuned to email, text alerts, and [DISTRICT WEBSITE] for updates

Students and staff are following established safety procedures. Law enforcement is on scene.

We will communicate again as soon as we have more information. We know this is frightening. Thank you for trusting us.

[SUPERINTENDENT NAME]`,

        staff: `URGENT — [SCHOOL] is on [STATUS]. Follow safety protocols. Do not communicate externally. All inquiries to [COMMUNICATIONS LEAD]. Updates will follow.`,

        social: `URGENT: [SCHOOL NAME] is on [lockdown / hold-in-place] in coordination with law enforcement. Parents — DO NOT come to the school. DO NOT call your child. Updates: [DISTRICT WEBSITE].`,

        robocall: `This is an urgent message. [SCHOOL NAME] is currently on [lockdown / hold-in-place] in coordination with law enforcement. Please do NOT come to the school. Please do NOT call your child. We will update you as soon as possible. Watch your email and [DISTRICT WEBSITE].`,

        board: `Board — URGENT.

[SCHOOL] on [STATUS] at [TIME]. Coordinating with [LAW ENFORCEMENT]. Family alert sent. Media to [COMMUNICATIONS LEAD] only.

Do NOT come to the school. Do NOT communicate externally. I will update you.

[SUPERINTENDENT NAME]`
      }
    }
  },

  {
    id: "data-breach",
    category: "Security",
    title: "Cyber Incident or Data Breach",
    severity: "high",
    summary: "A ransomware attack, data exposure, or system breach has occurred. Legal notification timelines apply. Speculation about what was taken can cause as much damage as the breach itself.",
    firstActions: [
      "Engage cyber counsel and incident response BEFORE communication",
      "Determine notification obligations (state law, FERPA, HIPAA)",
      "Coordinate with insurance carrier",
      "Identify what is confirmed vs. unknown — do not speculate",
      "Plan for sustained communication: this will be a multi-week story"
    ],
    toughQuestions: [
      "Was student data taken?",
      "Were Social Security numbers exposed?",
      "Did you pay the ransom?",
      "Why didn't your security stop this?",
      "What are you doing to prevent this in the future?"
    ],
    templates: {
      tv: `[DISTRICT NAME] is responding to a [cybersecurity incident / data security incident]. Upon discovery, the district [TOOK INITIAL STEPS — took systems offline, engaged cybersecurity experts, notified law enforcement]. We are working with cybersecurity professionals and [LAW ENFORCEMENT] to investigate the scope and determine what, if any, information was affected. Out of respect for the integrity of the investigation, we are sharing what we are able to share. We will notify any individuals whose information may have been affected as required by law. Updates at [DISTRICT WEBSITE].`,

      radio: `[DISTRICT NAME] is responding to a cybersecurity incident. We have engaged cybersecurity experts and law enforcement. Schools [will continue / are operating on modified systems]. Updates: [DISTRICT WEBSITE].`,

      print: `FOR IMMEDIATE RELEASE
[DATE]
Contact: [COMMUNICATIONS LEAD], [PHONE], [EMAIL]

[DISTRICT NAME] RESPONDS TO CYBERSECURITY INCIDENT

[CITY, STATE] — [DISTRICT NAME] is responding to a cybersecurity incident affecting some district systems. Upon discovery on [DATE], the district [took affected systems offline / engaged cybersecurity experts / notified law enforcement] as part of its incident response plan.

The district is working with cybersecurity professionals and [LAW ENFORCEMENT] to investigate the scope of the incident. The investigation is ongoing.

"Protecting the information of our students, families, and staff is a responsibility we take seriously," said Superintendent [NAME]. "We are committed to a thorough investigation and to notifying any affected individuals as required by law."

Schools [STATUS — continue to operate / operating on modified systems]. Updates will be posted at [DISTRICT WEBSITE].

###`,

      community: {
        family: `Dear [DISTRICT NAME] Families,

I am writing to inform you that the district is responding to a cybersecurity incident discovered on [DATE]. Upon discovery, we [took immediate steps — disconnected affected systems, engaged cybersecurity experts, notified law enforcement].

What we know:
• [BRIEF FACTUAL SUMMARY of what is confirmed]
• [WHAT IS UNKNOWN — investigation will determine scope]

What I want you to know:
• Schools [are operating normally / are operating on modified systems for STATED REASON].
• If our investigation finds that any individual's information was affected, we will notify those individuals directly, as required by law.
• We will not speculate, and I ask that we all be patient as the investigation progresses.

I will update you as I am able. Questions: [PHONE/EMAIL].

[SUPERINTENDENT NAME]`,

        staff: `Team,

We are responding to a cybersecurity incident. IT, cybersecurity experts, and law enforcement are engaged.

Until further notice:
• [SYSTEM-SPECIFIC GUIDANCE — do not log in / use offline procedures / etc.]
• Direct media inquiries to [COMMUNICATIONS LEAD]
• Do not speculate with families or external parties
• Forward suspicious emails to [IT EMAIL] — do NOT click

A community letter has gone out. Updates will follow.

[SUPERINTENDENT NAME]`,

        social: `[DISTRICT NAME] is responding to a cybersecurity incident. We have engaged cybersecurity experts and law enforcement. Schools [STATUS]. We will share confirmed information as appropriate. Updates: [DISTRICT WEBSITE].`,

        robocall: `This is Superintendent [NAME]. The district is responding to a cybersecurity incident. We have engaged experts and law enforcement, and we are operating [STATUS]. Please check your email for a detailed letter. We will continue to update you.`,

        board: `Board — Privileged.

Coordinating with cyber counsel, insurance, and [LAW ENFORCEMENT] on a [INCIDENT TYPE] discovered [DATE]. Initial response: [STEPS]. Notification analysis underway. Communication strategy: limited, factual, no speculation.

If asked: "I have full confidence in the response and the experts engaged." Direct media to [COMMUNICATIONS LEAD]. Do not discuss publicly.

I will brief you in executive session.

[SUPERINTENDENT NAME]`
      }
    }
  },

  // ============ REPUTATION & POLITICS ============
  {
    id: "viral-social-post",
    category: "Reputation & Politics",
    title: "Viral Social Media Post Involving the District",
    severity: "medium",
    summary: "A video, photo, or post involving a staff member or student has gone viral. Public outcry is fast. The full story is more complicated than the clip suggests.",
    firstActions: [
      "Verify what is real vs. edited / out of context",
      "Determine personnel and FERPA limits before drafting",
      "Acknowledge the public concern without litigating in public",
      "Move fast — the narrative window closes within 24 hours",
      "Decide: do you have a fact you can share that changes the public picture?"
    ],
    toughQuestions: [
      "Did this happen as shown?",
      "Will the staff member be fired?",
      "Was the student suspended?",
      "How could you let this happen?"
    ],
    templates: {
      tv: `We are aware of [DESCRIPTION — the video / image / post] circulating on social media involving [SCHOOL NAME]. The district is reviewing the matter under our policies and procedures. Out of respect for student privacy [and personnel confidentiality], I am limited in what I can share. What I can tell you is that we take community concerns seriously, that every member of our school community deserves to be treated with dignity, and that we will follow our process to its conclusion.`,

      radio: `[DISTRICT NAME] is aware of a [video / post] circulating on social media involving [SCHOOL NAME]. The district is reviewing the matter under our policies. Privacy laws limit additional comment. We take community concerns seriously.`,

      print: `FOR IMMEDIATE RELEASE
[DATE]
Contact: [COMMUNICATIONS LEAD], [PHONE], [EMAIL]

[DISTRICT NAME] STATEMENT REGARDING [BRIEF DESCRIPTION]

[CITY, STATE] — [DISTRICT NAME] is aware of [DESCRIPTION] circulating on social media involving [SCHOOL NAME]. The district is reviewing the matter under its policies and procedures.

"We take every community concern seriously," said Superintendent [NAME]. "Every member of our school community deserves to be treated with dignity. Out of respect for [student privacy / personnel confidentiality], we are limited in what we can share publicly. I appreciate the community's patience as we follow our process."

Updates will be shared as appropriate.

###`,

      community: {
        family: `Dear [DISTRICT NAME] Families,

You may have seen [DESCRIPTION — a video / post] circulating on social media involving [SCHOOL NAME]. I want to share what I can.

The district is aware and is reviewing the matter under our policies and procedures. Out of respect for [student privacy / personnel confidentiality], I am limited in what I can share publicly. I want you to know:

• We take community concerns seriously.
• Every member of our school community deserves to be treated with dignity.
• Our review process is fair, follows applicable law, and reaches conclusions based on facts — not on the volume of online conversation.

I appreciate your patience. I will share what I can, when I can.

[SUPERINTENDENT NAME]`,

        staff: `Colleagues,

You may have seen the [DESCRIPTION] circulating on social media. The district is reviewing the matter.

Please:
• Do NOT share or comment on the post
• Do NOT speculate with students or families
• Direct media to [COMMUNICATIONS LEAD]
• If a student wants to discuss, refer to a counselor

We will share what we can as the review progresses.

[SUPERINTENDENT NAME]`,

        social: `[DISTRICT NAME] is aware of [BRIEF DESCRIPTION] circulating on social media. The district is reviewing the matter under our policies. Privacy laws limit further comment. We take community concerns seriously.`,

        robocall: `This is Superintendent [NAME]. Many of you have seen a post circulating on social media involving [SCHOOL]. The district is reviewing the matter under our policies. Privacy laws limit what I can share publicly. A letter has been sent to your email.`,

        board: `Board,

Confidential.

[BRIEF FACTUAL SUMMARY]. Review under [POLICY]. Counsel engaged.

If asked: "I have full confidence in the superintendent and the process." Do not comment on specifics. Direct media to [COMMUNICATIONS LEAD].

[SUPERINTENDENT NAME]`
      }
    }
  },

  {
    id: "budget-defeat",
    category: "Reputation & Politics",
    title: "Budget Vote Defeat",
    severity: "medium",
    summary: "The community has voted down the budget. Staff, families, and the press want to know what comes next — and how it will affect students.",
    firstActions: [
      "Acknowledge the vote with respect — do not blame voters",
      "State next steps: contingency, revote, or austerity",
      "Avoid alarmism while being honest about impact",
      "Plan stakeholder engagement before the next vote"
    ],
    toughQuestions: [
      "Will teachers be laid off?",
      "Will sports be cut?",
      "Will you raise taxes anyway?",
      "What happens to the kids?"
    ],
    templates: {
      tv: `Last night, voters in [DISTRICT NAME] did not approve the proposed budget. We respect the decision of our community. The Board of Education and administration will review options under [STATE] law, including [revote / contingency budget / etc.], and will determine the path forward at [MEETING DATE]. Our commitment to our students and staff has not changed. We will continue to engage with families and community members about the choices ahead.`,

      radio: `[DISTRICT NAME] voters did not approve the budget last night. The Board will review options at [MEETING DATE]. The district remains committed to its students and will continue to engage with the community about the path forward.`,

      print: `FOR IMMEDIATE RELEASE
[DATE]
Contact: [COMMUNICATIONS LEAD], [PHONE], [EMAIL]

STATEMENT FROM [DISTRICT NAME] ON BUDGET VOTE

[CITY, STATE] — On [DATE], voters in [DISTRICT NAME] did not approve the proposed [YEAR] budget. Final unofficial vote: [YES] in favor, [NO] opposed.

"We respect the decision of our community," said Superintendent [NAME]. "The Board of Education and administration will review options under [STATE] law and chart the path forward together with our families."

The Board will discuss next steps at its meeting on [DATE], [TIME], at [LOCATION]. Options under consideration include [revote, contingency budget, etc.].

The district remains committed to its students and staff and will continue to engage with the community.

###`,

      community: {
        family: `Dear [DISTRICT NAME] Families,

Last night, voters did not approve the proposed [YEAR] budget. I want to share what comes next.

What we know:
• Final unofficial result: [YES] in favor, [NO] opposed
• Under [STATE] law, the Board has options including [revote / contingency budget / etc.]
• The Board will determine next steps at its meeting on [DATE], [TIME], [LOCATION]

What I want you to know:
• I respect every voter's decision.
• Our students and our commitment to them are unchanged.
• The choices ahead require honest community conversation, and I welcome yours.

I will share details as the Board determines the path forward. Please join us at [MEETING DATE].

[SUPERINTENDENT NAME]`,

        staff: `Colleagues,

Last night's budget vote did not pass. The Board will review options at [MEETING DATE].

I want to thank you for the work you do every day. The path forward will involve honest conversation. I will keep you informed and involve staff in planning.

If asked by families or media, please direct them to [COMMUNICATIONS LEAD] or to me. Do not speculate about specific cuts.

[SUPERINTENDENT NAME]`,

        social: `Last night's [DISTRICT NAME] budget vote did not pass. We respect our community's decision. The Board will determine next steps at [MEETING DATE], [TIME], [LOCATION]. Public welcome.`,

        robocall: `This is Superintendent [NAME]. Last night's budget vote did not pass. The Board will discuss next steps at the meeting on [DATE]. I will share more in a letter to your email. Thank you to everyone who participated in our democratic process.`,

        board: `Board,

Vote: [YES] / [NO]. We need to convene at [DATE] to determine path forward — revote, contingency, or other. I am preparing scenarios for that meeting and will share by [DATE].

If asked: "We respect the community's decision and will determine next steps at our [DATE] meeting." Avoid speculation about specific cuts.

[SUPERINTENDENT NAME]`
      }
    }
  },

  {
    id: "lawsuit-filed",
    category: "Reputation & Politics",
    title: "Lawsuit Filed Against the District",
    severity: "medium",
    summary: "A complaint has been filed in court against the district. The complaint allegations are public; the district's defense often is not yet.",
    firstActions: [
      "Coordinate every word with district counsel",
      "Acknowledge the filing without litigating in public",
      "Distinguish 'allegations in a complaint' from 'facts'",
      "Plan for staff and family communication if the matter is high-profile"
    ],
    toughQuestions: [
      "Did the district do what the complaint says?",
      "Will the district settle?",
      "How much will this cost taxpayers?",
      "Is anyone going to be fired?"
    ],
    templates: {
      tv: `[DISTRICT NAME] has been served with a [complaint / lawsuit] filed in [COURT]. We are reviewing the complaint with counsel. As is the case with any litigation, we are limited in what we can say publicly. What I can say is that the allegations in a complaint are not the same as findings of fact. The district will respond through the legal process, where every claim will be tested against evidence.`,

      radio: `[DISTRICT NAME] has been served with a complaint filed in [COURT]. The district is reviewing with counsel. Litigation limits public comment. The district will respond through the legal process.`,

      print: `FOR IMMEDIATE RELEASE
[DATE]
Contact: [COMMUNICATIONS LEAD], [PHONE], [EMAIL]

STATEMENT FROM [DISTRICT NAME] REGARDING LITIGATION

[CITY, STATE] — [DISTRICT NAME] has been served with a [complaint / lawsuit] filed in [COURT]. The district is reviewing the matter with counsel.

"We respect the legal process," said Superintendent [NAME]. "Allegations in a complaint are not findings of fact. The district will respond through that process, where every claim will be tested against evidence. Out of respect for the integrity of the litigation, we are limited in what we can say publicly."

###`,

      community: {
        family: `Dear [DISTRICT NAME] Families,

You may see news about a [lawsuit / complaint] filed against the district. I want to share what I can.

The district has been served and is reviewing the matter with counsel. Out of respect for the legal process, I am limited in what I can say publicly. What I can say:

• Allegations in a complaint are not findings of fact.
• The district will respond through the legal process, where every claim will be tested.
• Our commitment to your children and to running the district responsibly is unchanged.

I will share information as the legal process allows.

[SUPERINTENDENT NAME]`,

        staff: `Colleagues,

You may see news of a [complaint / lawsuit] filed against the district. The district is reviewing with counsel.

Please:
• Do NOT discuss the matter externally
• Do NOT speculate with students, families, or one another
• Direct media to [COMMUNICATIONS LEAD]
• If subpoenaed or contacted by attorneys, notify [HR / LEGAL] immediately

[SUPERINTENDENT NAME]`,

        social: `[DISTRICT NAME] has been served with a [complaint / lawsuit]. We are reviewing with counsel. Allegations in a complaint are not findings of fact. We will respond through the legal process.`,

        robocall: `(Use only if matter is high-profile and unavoidable.)`,

        board: `Board — Privileged. Coordinate with counsel before discussion.

Complaint filed [DATE] in [COURT] alleging [BRIEF, COUNSEL-APPROVED]. Counsel reviewing. Communications will be coordinated with counsel.

If asked: "I have full confidence in the district and the process. Out of respect for the litigation, I cannot comment on specifics." Direct media to [COMMUNICATIONS LEAD].

Executive session at next meeting.

[SUPERINTENDENT NAME]`
      }
    }
  },

  // ============ HEALTH ============
  {
    id: "outbreak",
    category: "Health",
    title: "Disease Outbreak (Flu, Norovirus, Other)",
    severity: "medium",
    summary: "An unusual cluster of illness has been identified. Public health is engaged. Families want to know if school is safe.",
    firstActions: [
      "Coordinate with [COUNTY/STATE] Department of Health BEFORE communication",
      "Confirm: cluster size, location, condition, public health guidance",
      "Decide on closure / cleaning / continued operation in coordination with DOH",
      "Repeat: 'we are following Department of Health guidance' — that's the trust anchor",
      "Provide actionable family guidance (symptoms, when to keep child home)"
    ],
    toughQuestions: [
      "Is school being closed?",
      "How many students are sick?",
      "Should I keep my child home?",
      "Is the building being cleaned?"
    ],
    templates: {
      tv: `[DISTRICT NAME] is working closely with the [COUNTY] Department of Health regarding an increase in [ILLNESS] cases at [SCHOOL]. We are following Department of Health guidance, which currently includes [GUIDANCE — enhanced cleaning, monitoring, etc.]. Schools [will remain open / will be closed for cleaning on DATE]. Families should keep children home if they are experiencing [SYMPTOMS]. Updates at [DISTRICT WEBSITE].`,

      radio: `[DISTRICT NAME] is working with the Department of Health on an increase in [ILLNESS] cases at [SCHOOL]. We are following Department of Health guidance. Updates at [DISTRICT WEBSITE].`,

      print: `FOR IMMEDIATE RELEASE
[DATE]
Contact: [COMMUNICATIONS LEAD], [PHONE], [EMAIL]

[DISTRICT NAME] WORKING WITH HEALTH DEPARTMENT ON ILLNESS REPORTED AT [SCHOOL]

[CITY, STATE] — [DISTRICT NAME] is working closely with the [COUNTY] Department of Health regarding an increase in cases of [ILLNESS] at [SCHOOL].

The district is following Department of Health guidance, which includes [STEPS — enhanced cleaning, hand hygiene reinforcement, monitoring].

"We are following the Department of Health's guidance step by step," said Superintendent [NAME]. "Family communication and operational decisions will follow public health expertise."

Families are encouraged to:
• Keep children home if experiencing [SYMPTOMS]
• Follow handwashing and respiratory hygiene practices
• Contact a healthcare provider for diagnosis and care

Updates at [DISTRICT WEBSITE].

###`,

      community: {
        family: `Dear [SCHOOL NAME] Families,

The district is working with the [COUNTY] Department of Health regarding an increase in [ILLNESS] cases at [SCHOOL]. We are following their guidance and will continue to do so.

What we are doing:
• [Enhanced cleaning / monitoring / specific actions]
• [Schools will remain open / Schools will be closed DATE for cleaning]
• Working in partnership with the Department of Health

What you can do:
• Keep your child home if they have [SYMPTOMS — fever, vomiting, etc.]
• Reinforce handwashing and respiratory hygiene
• Contact your healthcare provider for diagnosis

We will continue to communicate as the situation develops.

[SUPERINTENDENT NAME]`,

        staff: `Team,

We are working with the Department of Health on an increase in [ILLNESS] at [SCHOOL]. Cleaning protocols are enhanced [DETAILS]. Please follow the guidance attached. Stay home if you are unwell.

[SUPERINTENDENT NAME]`,

        social: `[DISTRICT NAME] is working with the [COUNTY] Department of Health on an increase in [ILLNESS] cases at [SCHOOL]. Following DOH guidance. Keep children home if experiencing [SYMPTOMS]. Updates at [DISTRICT WEBSITE].`,

        robocall: `This is Superintendent [NAME]. The district is working with the Department of Health on an increase in [ILLNESS] at [SCHOOL]. We are following their guidance. Please keep your child home if they have [SYMPTOMS]. A letter with details has been sent to your email.`,

        board: `Board,

DOH coordination on [ILLNESS] cluster at [SCHOOL]. Following their guidance: [STEPS]. Operational decisions: [DETAILS]. Family communication going out [TIME].

If asked: "We are following the Department of Health's guidance closely." Do not speculate.

[SUPERINTENDENT NAME]`
      }
    }
  },

  {
    id: "environmental-concern",
    category: "Health",
    title: "Environmental Concern (Mold, Lead, Air Quality)",
    severity: "medium",
    summary: "An environmental concern has been identified in a school building. Families want to know whether their children have been exposed and whether the building is safe today.",
    firstActions: [
      "Coordinate with [STATE] Department of Health and environmental engineer",
      "Confirm: what was found, where, exposure assessment, remediation plan",
      "Be specific about testing results — 'below action level' means little to families",
      "Plan for sustained communication: this will not be one letter"
    ],
    toughQuestions: [
      "How long has this been going on?",
      "Have my children been exposed?",
      "Why didn't you tell us sooner?",
      "Is the building safe today?"
    ],
    templates: {
      tv: `[DISTRICT NAME] is sharing with you that [ENVIRONMENTAL CONCERN — e.g., elevated lead levels in water at one fixture / mold identified in classroom NUMBER] was identified at [SCHOOL] on [DATE]. Upon discovery, the district [TOOK STEPS — took the fixture out of service, isolated the classroom, engaged environmental experts]. We are working with [DEPARTMENT OF HEALTH / CERTIFIED ENVIRONMENTAL FIRM] to assess and remediate. We will share results and next steps as we receive them. Our commitment is to transparency and to the health of every student and staff member.`,

      radio: `[DISTRICT NAME] identified [CONCERN] at [SCHOOL] on [DATE]. The district took immediate action, including [STEPS], and is working with [DOH / EXPERTS]. Updates at [DISTRICT WEBSITE].`,

      print: `FOR IMMEDIATE RELEASE
[DATE]
Contact: [COMMUNICATIONS LEAD], [PHONE], [EMAIL]

[DISTRICT NAME] ADDRESSES ENVIRONMENTAL FINDING AT [SCHOOL]

[CITY, STATE] — On [DATE], [DISTRICT NAME] identified [CONCERN] at [SCHOOL] during [ROUTINE TESTING / INSPECTION / REPORT]. Upon discovery, the district [STEPS — took source out of service, isolated affected area, engaged certified experts].

The district is working with [DEPARTMENT OF HEALTH / CERTIFIED FIRM] to complete a full assessment and remediation. Test results will be shared with families as they are received.

"Our commitment is to transparency and to the health of every student and staff member," said Superintendent [NAME].

Updates at [DISTRICT WEBSITE].

###`,

      community: {
        family: `Dear [SCHOOL NAME] Families,

I am writing to share with you that on [DATE], the district identified [CONCERN] at [SCHOOL]. Upon discovery, we took immediate action:
• [STEP — fixture taken out of service / area isolated / experts engaged]
• [STEP — testing initiated / DOH notified]

What we are doing now:
• Working with [DEPARTMENT OF HEALTH / CERTIFIED ENVIRONMENTAL FIRM]
• Full testing of [SCOPE]
• Remediation plan in progress

What I can tell you about safety:
• [STATE OF BUILDING TODAY — e.g., classroom is closed; alternate water source available]

What I am committed to:
• Sharing test results when we receive them
• Communicating clearly, even when answers are partial
• Following expert guidance

Please direct questions to [PHONE/EMAIL]. I will continue to update you.

[SUPERINTENDENT NAME]`,

        staff: `Team,

[CONCERN] identified at [SCHOOL] on [DATE]. Steps taken: [DETAILS]. Working with [EXPERTS / DOH]. Family letter going out [TIME]. Direct concerned families to [PHONE/EMAIL]. Direct media to [COMMUNICATIONS LEAD]. Do not speculate.

[SUPERINTENDENT NAME]`,

        social: `[DISTRICT NAME] identified [CONCERN] at [SCHOOL] on [DATE]. Immediate action taken. Working with [DOH / EXPERTS]. Detailed letter sent to families. Updates: [DISTRICT WEBSITE].`,

        robocall: `This is Superintendent [NAME]. The district identified [CONCERN] at [SCHOOL] on [DATE]. We took immediate action and are working with experts and the Department of Health. A detailed letter has been sent to your email. We will continue to update you.`,

        board: `Board,

[CONCERN] at [SCHOOL] identified [DATE]. Action: [STEPS]. Engaged: [EXPERTS]. Testing: [SCOPE]. Communication going out [TIME]. Sustained communication plan in place.

If asked: "I have full confidence in the response and our commitment to transparency." Direct media to [COMMUNICATIONS LEAD].

[SUPERINTENDENT NAME]`
      }
    }
  },

  // ============ ACADEMIC & PROGRAMMATIC ============
  {
    id: "curriculum-challenge",
    category: "Academic & Programmatic",
    title: "Curriculum or Library Book Challenge",
    severity: "low",
    summary: "A community member or group has formally challenged a book, lesson, or curriculum. The challenge may be at a board meeting, in the news, or both.",
    firstActions: [
      "Confirm whether a formal challenge process has been initiated",
      "Communicate the policy and process — process is your friend",
      "Acknowledge the community member's right to raise the concern",
      "Avoid taking the bait of a culture-war framing"
    ],
    toughQuestions: [
      "Will you remove the book?",
      "Why is this in our school?",
      "Whose decision is this?",
      "Are you indoctrinating children?"
    ],
    templates: {
      tv: `[DISTRICT NAME] follows a clear process when a member of our community raises a concern about curriculum or library materials. That process — outlined in Board Policy [#] — includes a formal review by educators, administrators, and community members. We respect every family's right to raise questions, and we follow our process to its conclusion. The process will result in a recommendation that will be considered at [BOARD STEP].`,

      radio: `[DISTRICT NAME] has a formal process — Board Policy [#] — for reviewing curriculum or library material concerns. The process is underway and will result in a recommendation considered at [BOARD STEP].`,

      print: `FOR IMMEDIATE RELEASE
[DATE]
Contact: [COMMUNICATIONS LEAD], [PHONE], [EMAIL]

[DISTRICT NAME] STATEMENT ON CURRICULUM REVIEW PROCESS

[CITY, STATE] — [DISTRICT NAME] follows Board Policy [#] for the review of curriculum and library materials when a community member raises a concern. The policy provides a formal process that includes review by educators, administrators, and community members.

"We respect every family's right to raise questions about what children read and learn," said Superintendent [NAME]. "We also have a process — and that process exists to ensure decisions are thoughtful, evidence-based, and made together with the community."

The current review concerning [MATERIAL] is underway. A recommendation will be made at [BOARD STEP].

###`,

      community: {
        family: `Dear [DISTRICT NAME] Families,

A community member has raised a concern about [MATERIAL]. The district follows a clear process — Board Policy [#] — to review such concerns. The process includes:

• Formal written request from the community member
• Review by a committee of educators, administrators, and community members
• Recommendation to the Superintendent and Board

The committee is reviewing [MATERIAL] now. A recommendation will be considered at [BOARD STEP].

Every family has the right to raise concerns. Every family also has the right to make decisions about what their own child reads. Our process exists to make decisions that are thoughtful and based on evidence and community voice.

Thank you for your engagement.

[SUPERINTENDENT NAME]`,

        staff: `Colleagues,

A challenge has been raised regarding [MATERIAL]. Policy [#] is the process. Please refer questions to [PRINCIPAL / CENTRAL OFFICE]. Continue your instruction as planned. Direct media to [COMMUNICATIONS LEAD].

[SUPERINTENDENT NAME]`,

        social: `[DISTRICT NAME] follows Board Policy [#] for curriculum and library material reviews. A review of [MATERIAL] is underway. Recommendation at [BOARD STEP].`,

        robocall: `(Typically not used unless the matter has reached a high public profile.)`,

        board: `Board,

Challenge initiated against [MATERIAL] under Policy [#]. Committee convened. Recommendation expected at [BOARD STEP]. I will provide a full briefing.

If asked: "We have a thoughtful process and we are following it." Avoid culture-war framing.

[SUPERINTENDENT NAME]`
      }
    }
  },

  {
    id: "athletic-incident",
    category: "Academic & Programmatic",
    title: "Athletic Incident or Coach Misconduct",
    severity: "medium",
    summary: "An incident has occurred at a game, practice, or involving a coach. Athletics generates passionate community opinion. Speed and clarity matter.",
    firstActions: [
      "Confirm facts with athletic director, coach, and any law enforcement",
      "Coordinate with section/league if officials or competition is involved",
      "If allegations against coach: personnel confidentiality applies",
      "Acknowledge: athletics is part of education; sportsmanship matters"
    ],
    toughQuestions: [
      "Will the coach be fired?",
      "What are you doing about the [behavior]?",
      "Will the team be suspended?",
      "Will the district forfeit?"
    ],
    templates: {
      tv: `[DISTRICT NAME] is aware of [INCIDENT — e.g., the incident at the (DATE/SPORT) game / concerns raised about a coach]. The district is reviewing the matter [under our athletic code of conduct / under personnel policies / in coordination with SECTION]. Out of respect for [the process / personnel confidentiality / student privacy], I am limited in what I can share. Sportsmanship and the safety of every student-athlete are core to our athletics program. We will follow our process to its conclusion.`,

      radio: `[DISTRICT NAME] is reviewing [INCIDENT]. Privacy laws and our review process limit comment. We are committed to sportsmanship and student-athlete safety.`,

      print: `FOR IMMEDIATE RELEASE
[DATE]
Contact: [COMMUNICATIONS LEAD], [PHONE], [EMAIL]

[DISTRICT NAME] STATEMENT ON [INCIDENT]

[CITY, STATE] — [DISTRICT NAME] is reviewing [INCIDENT — broad description] under [athletic code of conduct / personnel policies / SECTION coordination].

"Sportsmanship and the safety of every student-athlete are core to our athletics program," said Superintendent [NAME]. "Out of respect for [the process / privacy], we are limited in what we can share. We will follow our process to its conclusion."

###`,

      community: {
        family: `Dear [DISTRICT NAME] Families,

I am writing about [INCIDENT — broad description]. The district is reviewing the matter under [policy / coordination with SECTION]. Out of respect for [the process / personnel confidentiality / student privacy], I am limited in what I can share publicly.

What I want you to know:
• Sportsmanship is part of who we are.
• The safety of every student-athlete is non-negotiable.
• Our review will be fair and based on facts.

I will share what I can, when I can.

[SUPERINTENDENT NAME]`,

        staff: `Coaches and AD team,

We are reviewing [INCIDENT]. Until further notice:
• Continue scheduled practices/games
• Direct any media or community inquiries to [COMMUNICATIONS LEAD]
• Reinforce sportsmanship expectations with players and parents

I will update you as the review progresses.

[SUPERINTENDENT NAME]`,

        social: `[DISTRICT NAME] is reviewing [INCIDENT] under our athletic policies. Sportsmanship and student-athlete safety are core to our program. Privacy and process limit further comment.`,

        robocall: `(Use only if widely visible incident.)`,

        board: `Board,

Confidential review of [INCIDENT]. Coordinating with [AD / COUNSEL / SECTION]. If asked: "I have full confidence in the review process. We are committed to sportsmanship and student-athlete safety." Direct media to [COMMUNICATIONS LEAD].

[SUPERINTENDENT NAME]`
      }
    }
  }
];

// Holding statement template for use in the first 30 minutes
window.HOLDING_STATEMENT = {
  short: `[DISTRICT NAME] is aware of [BRIEF SITUATION] at [LOCATION]. We are working with [LAW ENFORCEMENT / DEPARTMENT OF HEALTH / EXPERTS] and will share confirmed information as soon as possible. Student and staff safety remains our highest priority. Updates at [DISTRICT WEBSITE].`,

  full: `[DISTRICT NAME] is aware of [BRIEF SITUATION] at [LOCATION/SCHOOL] reported at approximately [TIME]. Upon learning of the situation, the district [INITIAL ACTION].

We are coordinating with [LAW ENFORCEMENT / DEPARTMENT OF HEALTH / OTHER PARTNERS] and will share confirmed information as soon as it is appropriate to do so.

The safety and well-being of our students and staff remains our highest priority. We will continue to update families through email, [DISTRICT WEBSITE], and district social media.

Out of respect for [the active investigation / student privacy / personnel confidentiality], some details cannot be shared at this time.

— Superintendent [NAME], [DISTRICT NAME]`
};

// PR Principles drawn from Brian's panel notes
window.PR_PRINCIPLES = [
  {
    title: "Speed beats polish",
    body: "Silence creates a vacuum, and that vacuum is filled by rumor, fear, and speculation. It is often better to communicate early with limited confirmed information than to wait too long. A holding statement within 30 minutes is almost always the right call."
  },
  {
    title: "AI drafts. The superintendent owns the message.",
    body: "Use AI to draft, simplify, translate, organize, and prepare. Read every word. Your community knows your voice. AI does not."
  },
  {
    title: "Avoid 'no comment'",
    body: "Say what you can say, and explain why you are limited. 'Because this involves a student matter, I cannot discuss individual details. What I can say is that the district takes these concerns seriously and follows established procedures.'"
  },
  {
    title: "Internal before external",
    body: "Communicate with staff before they hear it from somewhere else. They will be asked questions and they need talking points."
  },
  {
    title: "One district voice, adapted",
    body: "Use AI to adapt one core message for different audiences while preserving the same facts. Principals and central office should not be saying different things."
  },
  {
    title: "Transparency with limits",
    body: "Be as transparent as possible without being irresponsible. Limits include student privacy, personnel matters, safety plans, legal advice, and active investigations. Confidentiality is not secrecy — it is exactly what ethical leadership requires."
  },
  {
    title: "Off the record is a relationship tool, not a loophole",
    body: "Establish the agreement before you provide context. Use it carefully. If you would be devastated to see something in print, think very carefully before saying it at all."
  },
  {
    title: "Don't litigate in public",
    body: "Allegations in a complaint are not findings of fact. Process is your friend. Let it work."
  },
  {
    title: "The goal is not to win the comment section",
    body: "The goal is to preserve trust, protect people, and stay focused on students."
  }
];

// Audience alignment checklist
window.CHECKLIST = [
  "Confirm facts with primary source (law enforcement, DOH, family)",
  "Consult counsel if personnel, litigation, or privacy implicated",
  "Issue holding statement within 30 minutes if facts incomplete",
  "Draft channel-specific versions: TV, radio, print, family, staff, social, robocall, board",
  "Notify staff before families when possible",
  "Review for FERPA / personnel confidentiality / safe messaging",
  "Verify principal and central office are saying the same thing",
  "Designate one media spokesperson",
  "Post to district website and pin to social",
  "Plan follow-up communication: 24h, 48h, 1 week",
  "After-action review with cabinet and board"
];
