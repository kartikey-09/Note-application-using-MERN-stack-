import {Button,Card,CardBody,Flex,Heading,Text,VStack} from "@chakra-ui/react"



export default function NoteCard({title,body,user,_id}){

    return <Card>
        <CardBody>
            <VStack>

                <Heading>{title}</Heading>
                <Text>{body}</Text>

                <Flex>

                    <Button>Update</Button>
                    <Button>Delete</Button>

                </Flex>
            </VStack>
        </CardBody>
    </Card>

}